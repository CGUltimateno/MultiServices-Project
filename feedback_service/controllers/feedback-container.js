const Feedback = require('../models/feedback-model');

getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find({});
        if (!feedbacks.length) {
            return res.status(404).json({ success: false, error: 'Feedback not found' });
        }
        return res.status(200).json({ success: true, data: feedbacks });
    } catch (err) {
        return res.status(400).json({ success: false, error: err });
    }
}

createFeedback = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a feedback',
        });
    }

    const feedback = new Feedback(body);

    try {
        await feedback.save();
        return res.status(201).json({
            success: true,
            id: feedback._id,
            message: 'Feedback created!',
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'Feedback not created!',
        });
    }
}

module.exports = {
    getFeedbacks,
    createFeedback,
}