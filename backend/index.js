require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const workoutRouts = require('./routes/workoutRouts');

// Middleware
app.use(express.json());

// Routes
app.use('/api/workouts', workoutRouts);

// Connect to db
mongoose.connect(process.env.DB_URI)
    .then(() => {
        // Listen for requests
        app.listen(port, () => {
        console.log('Connected to database & listening on port ' + port)
        });
    })
    .catch((err) => console.log(err));
