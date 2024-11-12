const Workout = require("../models/workoutModel");

//create a new workout
const createWorkout = async(req,res)=>{
    const {title, reps, load} = req.body; //possible because i used the middleware , express.json
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//get all workouts
const getWorkouts = async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt : -1});
    res.status(200).json(workouts);
}

module.exports ={
    createWorkout,
    getWorkouts
}