const Feedback = require('../models/feedback-model'); // Import the Feedback model with a capital 'F'

const createFeedback = async (req, res) => {
    const { feedback, userId } = req.body;
    const newFeedback = new Feedback({ feedback, userId }); // Use the Feedback constructor with a capital 'F'

    try {
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getFeedbacks = async (req, res) => {
    const feedbacks = await feedback.find({});
    res.send (feedbacks);
}

checkServiceRunning = (req, res) => {
    res.send('Hello World! - from users service');
};
module.exports = {
    createFeedback,
    getFeedbacks,
    checkServiceRunning
};