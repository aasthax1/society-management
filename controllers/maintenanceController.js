const MaintenanceDues = require('../models/Maintenance');


// Get maintenance dues and invoices
exports.getMaintenanceDues = async (req, res) => {
    try {
        const maintenanceDues = await MaintenanceDues.find();
        res.status(200).json(maintenanceDues);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Pay maintenance dues
exports.payMaintenanceDues = async (req, res) => {
    const duesId = req.params.duesId;
    try {
        // Assuming you have a function to handle payment processing
        // Example: const paymentStatus = await paymentGateway.processPayment(req.body.amount, req.body.paymentMethod);
        // Update the payment status in the database
        const updatedDues = await MaintenanceDues.findByIdAndUpdate(duesId, { paid: true }, { new: true });
        
        // If payment is successful, notify user
        if (updatedDues) {
            // Assuming you have a function to send notifications
            // Example: notificationService.sendNotification(updatedDues.residentId, 'Payment successful');
            
            // Remove any existing reminder for this dues
            // await Reminder.findOneAndDelete({ duesId });

            res.status(200).send("Payment successful");
        } else {
            res.status(404).send("Dues not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};