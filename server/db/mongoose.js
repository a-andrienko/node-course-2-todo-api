var mongoose = require('mongoose');

// which promise library to use
mongoose.Promise = global.Promise;

// connecting to actual heroku db or localhost
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};