const mongoose = require('mongoose');

const maintenanceDuesSchema = new mongoose.Schema({
    residentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    paid: { type: Boolean, default: false }
});

module.exports = mongoose.model('MaintenanceDues', maintenanceDuesSchema);

