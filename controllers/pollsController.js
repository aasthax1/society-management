const Poll = require('../models/Poll');

// Create a new poll or survey
exports.createPoll = async (req, res) => {
    try {
        const newPoll = new Poll(req.body);
        await newPoll.save();
        res.status(201).send("Poll or survey created successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Get all polls and surveys
exports.getAllPolls = async (req, res) => {
    try {
        const polls = await Poll.find();
        res.status(200).json(polls);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Get poll or survey by ID
exports.getPollById = async (req, res) => {
    const pollId = req.params.pollId;
    try {
        const poll = await Poll.findById(pollId);
        if (!poll) {
            return res.status(404).send("Poll or survey not found");
        }
        res.status(200).json(poll);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Submit response to a poll or survey
exports.submitResponse = async (req, res) => {
    const pollId = req.params.pollId;
    const { response } = req.body;
    try {
        const poll = await Poll.findById(pollId);
        if (!poll) {
            return res.status(404).send("Poll or survey not found");
        }
        poll.responses.push(response);
        await poll.save();
        res.status(200).send("Response submitted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};