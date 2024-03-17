const express = require('express');
const router = express.Router();
const pollsController = require('../controllers/pollsController');

// Create a new poll or survey
router.post('/create', pollsController.createPoll);

// Get all polls and surveys
router.get('/', pollsController.getAllPolls);

// Get poll or survey by ID
router.get('/:pollId', pollsController.getPollById);

// Submit response to a poll or survey
router.post('/:pollId/respond', pollsController.submitResponse);

module.exports = router;

