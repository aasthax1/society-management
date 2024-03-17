const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    capacity: { type: Number, required: true },
    isBooked: { type: Boolean, default: false }
});

module.exports = mongoose.model('Facility', facilitySchema);
