var mongoose = require('mongoose');

// which promise library to use
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};