const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    purpose: { type: String, required: true },
    entryTime: { type: Date, default: Date.now },
    exitTime: { type: Date }
});

module.exports = mongoose.model('Visitor', visitorSchema);
