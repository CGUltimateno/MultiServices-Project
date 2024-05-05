const express = require('express');
const feedbackController = require('../controllers/feedback-container');

const router = express.Router();

router.post('/feedback', feedbackController.createFeedback);

router.get('/feedback', feedbackController.getFeedbacks);

router.get('/feedback/:id', async (req, res) => {
    const feedback = await Feedback.findById(req.params.id);
    res.send(feedback);
});

router.put('/feedback/:id', async (req, res) => {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(feedback);
});

router.delete('/feedback/:id', async (req, res) => {
    await Feedback.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;