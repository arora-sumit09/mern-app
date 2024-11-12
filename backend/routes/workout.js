const express = require("express");

const router = express.Router();

const Workout = require("../models/workoutModel");

const { createWorkout, getWorkouts } = require( "../controllers/workout.controllers");

//Get all workouts
router.get("/", getWorkouts);

// single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get a single workout" });
});

// post a new workout
router.post("/:id", async (req, res) => {
  res.json({ mssg: "Post a new workout" });
});

router.post("/", createWorkout)

// delete a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Deleting this workout" });
});

// updating a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: " Update this workout " });
});
console.log("randome text")
console.log("router obj" , router);

module.exports = router;
