const express = require('express');
const router = express.Router();
const facilityController = require('../controllers/facilityController');

// Get all available facilities
router.get('/', facilityController.getAllFacilities);

// Get facility by ID
router.get('/:facilityId', facilityController.getFacilityById);

// Book a facility
router.post('/book', facilityController.bookFacility);

// Update facility booking
router.put('/:facilityId', facilityController.updateBooking);

// Cancel facility booking
router.delete('/:facilityId', facilityController.cancelBooking);

module.exports = router;
