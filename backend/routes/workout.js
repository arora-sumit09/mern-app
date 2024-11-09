const express = require('express');

const router = express.Router();

//Get all workouts
router.get('/' , (req,res)=>{
    res.json({mssg: 'Get all workouts'});
})

// single workout
router.get('/:id' , (req,res)=>{
    res.json({mssg : 'Get a single workout'});
})

// post a new workout
router.post('/:id' , (req,res)=>{
    res.json({mssg: 'Post a new workout'});
})

// delete a workout
router.delete('/:id' , (req,res)=>{
    res.json({mssg : 'Deleting this workout'});
})

// updating a workout
router.patch('/:id' , (req,res)=>{
    res.json({mssg : ' you can UpdatE this workout '});
})

module.exports =router;