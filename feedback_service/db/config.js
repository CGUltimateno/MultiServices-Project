const mongoose = require('mongoose');

const db = mongoose
    .connect("mongodb://feedback_db:27020/feedbackdb", { useNewUrlParser: true })
    .catch((e) => {
        console.error("Connection error", e.message);
    });

module.exports = db;