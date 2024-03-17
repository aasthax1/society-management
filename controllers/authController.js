// authController.js

const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            password: hashedPassword
        });
        await user.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.login = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(404).send("User not found");
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send("Login successful");
        } else {
            res.status(401).send("Invalid password");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
