require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const workoutRouts = require('./routes/workouts');

// Middleware
app.use(express.json());

// Routes
app.use('/api/workouts', workoutRouts);

// Listen for requests
app.listen(port, () => {
    console.log('Listening on port ' + port);
});


