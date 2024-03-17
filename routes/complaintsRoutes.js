const express = require('express');
const router = express.Router();
const complaintsController = require('../controllers/complaintsController');

// Submit a complaint or service request
router.post('/submit', complaintsController.submitComplaintOrRequest);

// Get all complaints and service requests
router.get('/', complaintsController.getAllComplaintsAndRequests);

// Get complaint or service request by ID
router.get('/:complaintId', complaintsController.getComplaintOrRequestById);

// Update complaint or service request
router.put('/:complaintId', complaintsController.updateComplaintOrRequest);

// Delete complaint or service request
router.delete('/:complaintId', complaintsController.deleteComplaintOrRequest);

module.exports = router;
