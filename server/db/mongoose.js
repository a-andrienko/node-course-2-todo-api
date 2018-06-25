var mongoose = require('mongoose');

// which promise library to use
mongoose.Promise = global.Promise;

// connecting to actual heroku db or localhost
mongoose.connect(procese.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};