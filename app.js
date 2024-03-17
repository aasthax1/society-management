const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const connectDB= require("./config/db.js")



// const Reminder = require('../models/Reminder');
const app = express();
const PORT = process.env.PORT || 3004;
connectDB();
// Database connection
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/visitors', require('./routes/visitorRoutes'));
app.use('/api/facilities', require('./routes/facilityRoutes'));
app.use('/api/maintenance', require('./routes/maintenanceRoutes'));
app.use('/api/complaints', require('./routes/complaintsRoutes'));
app.use('/api/polls', require('./routes/pollsRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;







