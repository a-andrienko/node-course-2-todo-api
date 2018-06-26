const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')

//// remove all 
//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({
    _id: '5b31859573b486774da4710b'
}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5b31859573b486774da4710b').then((todo) => {
    console.log(todo);
});

