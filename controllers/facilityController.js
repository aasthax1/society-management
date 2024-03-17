const Facility = require('../models/Facility');

exports.getAllFacilities = async (req, res) => {
    try {
        const facilities = await Facility.find();
        res.status(200).json(facilities);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getFacilityById = async (req, res) => {
    const facilityId = req.params.facilityId;
    try {
        const facility = await Facility.findById(facilityId);
        if (!facility) {
            return res.status(404).send("Facility not found");
        }
        res.status(200).json(facility);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.bookFacility = async (req, res) => {
    try {
        const newBooking = new Facility(req.body);
        await newBooking.save();
        res.status(201).send("Facility booked successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateBooking = async (req, res) => {
    const facilityId = req.params.facilityId;
    try {
        const updatedFacility = await Facility.findByIdAndUpdate(facilityId, req.body, { new: true });
        if (!updatedFacility) {
            return res.status(404).send("Facility not found");
        }
        res.status(200).json(updatedFacility);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.cancelBooking = async (req, res) => {
    const facilityId = req.params.facilityId;
    try {
        const deletedFacility = await Facility.findByIdAndDelete(facilityId);
        if (!deletedFacility) {
            return res.status(404).send("Facility not found");
        }
        res.status(200).send("Facility booking canceled successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};
