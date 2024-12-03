const express = require("express");
const Course = require("../models/Course.model");

const router = express.Router();

router.post(
    "/",
    async (req, res, next) =>{
        const { name, type, campus } = req.body

        const newCourse = {
            name, 
            type,
            campus
        }

        try{
            const response = await Course.create(newCourse)
            res.json(response);
        } catch(error){
            res.status(400).json({message: "We couldn't create a new course"});
        }

    }
)

module.exports = router;