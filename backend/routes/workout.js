const express = require("express");

const router = express.Router();

const Workout = require("../models/workoutModel");

const { createWorkout, getWorkouts, getWorkout, deleteWorkout, upadateWorkout } = require( "../controllers/workout.controllers");

//Get all workouts
router.get("/", getWorkouts);

// single workout
router.get("/:id", getWorkout);

// posting a workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// updating a workout
router.patch("/:id", upadateWorkout);

module.exports = router;
