const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/work_tracker', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

connection.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

module.exports = mongoose;
