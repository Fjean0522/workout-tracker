const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// Get all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createAt: -1})
    res.status(200).json(workouts)
};

// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Workout not found'})
    }
    
    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: 'Workout not found'})
    }

    res.status(200).json(workout)
};

// Create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;
    
    try {
        const workout =  await Workout.create({title, load, reps})
        res.status(200).json({workout})
    } catch (error) {
        res.status(404).json({error: error.message})
    };
};

// Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Workout not found'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
        return res.status(404).json({error: 'Workout not found'})
    }

    res.status(200).json(workout)
};

// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Workout not found'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body.body})

    if (!workout) {
        return res.status(404).json({error: 'Workout not found'})
    }

    res.status(200).json(workout)
};

module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
};