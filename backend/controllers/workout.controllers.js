const Workout = require("../models/workoutModel");
const mongoose = require('mongoose')
//create a new workout
const createWorkout = async(req,res)=>{
    const {title, reps, load} = req.body; //possible because i used the middleware , express.json
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//get all workouts
const getWorkouts = async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt : -1});
    res.status(200).json(workouts);
}

//get a workout
const getWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({error : "not a correct id format"})
    }
    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error : "no such workout"})
    }
    res.status(200).json(workout)
}
// delete a workout

const deleteWorkout = async(req,res)=>{
  const {id} = req.params;
  if(!mongoose.isValidObjectId(id)){
    return res.status(400).json({error : "not a correct format"});
  }
  const workout = await Workout.findById(id);
  if(!workout){
    return res.status(404).json({error : "no such workout exists"});
  }
  const result = await Workout.deleteOne({_id:id});
  return res.status(200).json(result);
}

// update a workout
const upadateWorkout = async (req,res)=>{
  const {id} = req.params
  
  if(!mongoose.isValidObjectId(id)){
    return res.status(400).json({error : "not a correct format"});
  }
  const workout = await Workout.findByIdAndUpdate({_id : id} , {...req.body}); 
  if(!workout){
    return res.status(404).json({error : "no such workout exists"});
  }
  res.status(200).json(workout);
}


module.exports ={
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    upadateWorkout
}