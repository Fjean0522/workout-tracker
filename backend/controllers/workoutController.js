const Workout = require('../models/workoutModel');

// Get all workouts
const getAllWorkouts = async (req, res) => {
    
};

// Get a single workout
const getWorkout = async (req, res) => {
    
};

// Create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;
    
    try {
        const workout =  await Workout.create({title, load, reps})
        res.status(200).json({workout})
    } catch (error) {
        res.status(404).json({error: error.message});
    };
};

// Delete a workout
const deleteWorkout = async (req, res) => {
    
};

// Update a workout
const updateWorkout = async (req, res) => {
    
};

module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
};