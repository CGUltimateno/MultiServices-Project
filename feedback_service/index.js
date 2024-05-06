// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db/config');
const feedbackRouter = require('./routes/feedback-router');

const app = express();
const apiPort = 5004

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.connect().catch(error => console.error('MongoDB connection error:', error));

app.use('/api', feedbackRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));