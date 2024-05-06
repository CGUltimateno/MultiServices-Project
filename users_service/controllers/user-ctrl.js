const User = require('../models/user-model');

// Function to handle user registration
registerUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            error: 'Username and password are required!',
        });
    }

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'Username already exists!',
            });
        }

        const newUser = new User({
            username,
            password,
        });

        const savedUser = await newUser.save();

        return res.status(201).json({
            success: true,
            message: 'User registered successfully!',
            user: savedUser,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error: Failed to register user!',
        });
    }
};

// Function to check user authentication
checkUserAuth = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            error: 'Username and password are required!',
        });
    }

    User.findOne({ username: username, password: password }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                err,
                message: 'User is Unauthorized!',
            });
        } else {
            return res.status(200).json({
                success: true,
                id: user._id,
                message: 'User is authorized!',
            });
        }
    });
};

// Function to check if the service is running
checkServiceRunning = (req, res) => {
    res.send('Hello World! - from users service');
};

module.exports = {
    registerUser,
    checkUserAuth,
    checkServiceRunning,
};
