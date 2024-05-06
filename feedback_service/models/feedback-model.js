const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Feedback = new Schema(
    {
        feedback: { type: String, required: true },
        userId: { type: String, required: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('feedback', Feedback, 'feedbacks');
