const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

// Get maintenance dues and invoices
router.get('/dues', maintenanceController.getMaintenanceDues);

// Pay maintenance dues
router.post('/pay/:duesId', maintenanceController.payMaintenanceDues);

module.exports = router;