var mongoose = require('mongoose');


// Todo constructor function
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};

//// new ToDo instance
//var newTodo = new Todo({
//    text: 'Cook dinner'
//});
//
//// save it to database
//newTodo.save().then((doc) => {
//    console.log('Saved todo', doc)
//}, (e) => {
//    console.log('Unable to save todo');
//});
//
//// new ToDo instance2
//var challengeTodo = new Todo({text: 23});
//
//// save it to database
//challengeTodo.save().then((doc) => {
//    console.log('Saved todo', doc)
//}, (e) => {
//    console.log('Unable to save todo', e);
//});
//
