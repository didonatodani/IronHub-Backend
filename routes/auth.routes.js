const express = require("express");
const router = express.Router();


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User.model");

const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const saltRounds = 10;

// POST /auth/signup  - Creates a new user in the database
router.post("/signup", (req, res, next) => {
  const {
    email,
    password,
    name,
    picture,
    linkedin,
    course,
    schedule,
    languages,
  } = req.body;

  if (email === "" || password === "" || name === "") {
    res.status(400).json({ message: "Provide email, password and name" });
    return;
  }

  // These regular expressions check for valid formats:
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ message: "Provide a valid email address." });
    return;
  }

  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    res.status(400).json({
      message:
        "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }

  // Check the users collection if a user with the same email already exists
  User.findOne({ email })
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: "User already exists." });
        return;
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Create the new user in the database
      // We return a pending promise, which allows us to chain another `then`
      return User.create({
        email,
        password: hashedPassword,
        name,
        picture,
        linkedin,
        course,
        schedule,
        languages,
      });
    })
    .then((createdUser) => {
      // Deconstruct the newly created user object to omit the password
      // We should never expose passwords publicly
      const { email, name, picture, linkedin, course, schedule, languages } =
        createdUser;

      const user = {
        email,
        name,
        picture,
        linkedin,
        course,
        schedule,
        languages,
      };

      res.status(201).json({ user: user });
    })
    .catch((err) => next(err));
});

// POST  /auth/login - Verifies email and password and returns a JWT
router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  // Check if email or password are provided as empty string
  if (email === "" || password === "") {
    res.status(400).json({ message: "Provide email and password." });
    return;
  }

  // Check the users collection if a user with the same email exists
  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        // If the user is not found, send an error response
        res.status(401).json({ message: "User not found." });
        return;
      }

      // Compare the provided password with the one saved in the database
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

      if (passwordCorrect) {
        // Deconstruct the user object to omit the password
        const { _id, email, name, picture } = foundUser;

        // Create an object that will be set as the token payload
        const payload = { _id, email, name, picture };
        


        // Create a JSON Web Token and sign it
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "20h",
        });

        // Send the token as the response
        res.status(200).json({ authToken: authToken });
      } else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }
    })
    .catch((err) => next(err)); // In this case, we send error handling to the error handling middleware.
});

// GET  /auth/verify  -  Used to verify JWT stored on the client
router.get("/verify", isAuthenticated, (req, res, next) => {
  // If JWT token is valid the payload gets decoded by the
  // isAuthenticated middleware and is made available on `req.payload`
  console.log(`req.payload`, req.payload);

  // Send back the token payload object containing the user data
  res.status(200).json(req.payload);
});

module.exports = router;
