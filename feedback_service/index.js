const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const feedbackRouter = require('./routes/feedback-router');

const app = express();
const apiPort = 5004;

mongoose.connect('mongodb://localhost/feedback', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use('/api', feedbackRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));