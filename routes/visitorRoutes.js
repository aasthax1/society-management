const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

// Register a visitor
router.post('/register', visitorController.registerVisitor);

// Get all visitors
router.get('/', visitorController.getAllVisitors);

// Get visitor by ID
router.get('/:visitorId', visitorController.getVisitorById);

// Update visitor information
router.put('/:visitorId', visitorController.updateVisitor);

// Delete visitor
router.delete('/:visitorId', visitorController.deleteVisitor);

module.exports = router;
