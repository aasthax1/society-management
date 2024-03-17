const Visitor = require('../models/Visitor');

exports.registerVisitor = async (req, res) => {
    try {
        const newVisitor = new Visitor(req.body);
        await newVisitor.save();
        res.status(201).send("Visitor registered successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getAllVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find();
        res.status(200).json(visitors);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getVisitorById = async (req, res) => {
    const visitorId = req.params.visitorId;
    try {
        const visitor = await Visitor.findById(visitorId);
        if (!visitor) {
            return res.status(404).send("Visitor not found");
        }
        res.status(200).json(visitor);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateVisitor = async (req, res) => {
    const visitorId = req.params.visitorId;
    try {
        const updatedVisitor = await Visitor.findByIdAndUpdate(visitorId, req.body, { new: true });
        if (!updatedVisitor) {
            return res.status(404).send("Visitor not found");
        }
        res.status(200).json(updatedVisitor);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteVisitor = async (req, res) => {
    const visitorId = req.params.visitorId;
    try {
        const deletedVisitor = await Visitor.findByIdAndDelete(visitorId);
        if (!deletedVisitor) {
            return res.status(404).send("Visitor not found");
        }
        res.status(200).send("Visitor deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};