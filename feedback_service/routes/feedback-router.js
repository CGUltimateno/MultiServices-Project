const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback-controller');


router.post('/feedback', feedbackController.createFeedback);

router.get('/feedback', feedbackController.getFeedbacks);

router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;