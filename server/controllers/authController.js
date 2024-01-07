const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        //password hashing using bcrypt
        const hashedPassword = bcrypt.hashSync(password, 10);

        //creating user using the userModel Schema
        const newUser = new User({ username, email, password: hashedPassword })
        await newUser.save()

        res.status(201).json('User created successfully!!')
    } catch (err) {
        next(err)
    }
};

module.exports = {
    signup
};