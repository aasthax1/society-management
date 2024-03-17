const Complaint = require('../models/Complaint');

// Submit a complaint or service request
exports.submitComplaintOrRequest = async (req, res) => {
    try {
        const newComplaint = new Complaint(req.body);
        await newComplaint.save();
        res.status(201).send("Complaint or request submitted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Get all complaints and service requests
exports.getAllComplaintsAndRequests = async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Get complaint or service request by ID
exports.getComplaintOrRequestById = async (req, res) => {
    const complaintId = req.params.complaintId;
    try {
        const complaint = await Complaint.findById(complaintId);
        if (!complaint) {
            return res.status(404).send("Complaint or request not found");
        }
        res.status(200).json(complaint);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Update complaint or service request
exports.updateComplaintOrRequest = async (req, res) => {
    const complaintId = req.params.complaintId;
    try {
        const updatedComplaint = await Complaint.findByIdAndUpdate(complaintId, req.body, { new: true });
        if (!updatedComplaint) {
            return res.status(404).send("Complaint or request not found");
        }
        res.status(200).json(updatedComplaint);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete complaint or service request
exports.deleteComplaintOrRequest = async (req, res) => {
    const complaintId = req.params.complaintId;
    try {
        const deletedComplaint = await Complaint.findByIdAndDelete(complaintId);
        if (!deletedComplaint) {
            return res.status(404).send("Complaint or request not found");
        }
        res.status(200).send("Complaint or request deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};
