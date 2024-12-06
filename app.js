require("dotenv").config();
require("./db");

const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware.js");
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/user", isAuthenticated, userRoutes);

const postsRoutes = require("./routes/posts.routes");
app.use("/posts", isAuthenticated, postsRoutes);

const repliesRoutes = require("./routes/replies.routes.js")
app.use("/posts", isAuthenticated, repliesRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
