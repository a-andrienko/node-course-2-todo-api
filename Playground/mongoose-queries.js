const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')

//var id = '5b315396c674455c10b30333z';
//
//if (!ObjectID.isValid(id)){
//    console.log('ID not valid');
//}
//
////Todo.find({
////    _id: id
////}).then((todos) => {
////    if (!todos){
////        return console.log('Id not found');
////    }
////    console.log('Todos', todos);
////});
////
////Todo.findOne({
////    _id: id
////}).then((todo) => {
////    if (!todo){
////        return console.log('Id not found');
////    }
////    console.log('Todo', todo);
////});
//
//Todo.findById(id).then((todo) => {
//    if (!todo){
//        return console.log('Id not found');
//    }
//    console.log('Todo By Id', todo);
//}).catch((e) => console.log(e));

const {User} = require('./../server/models/user')

var userId = '5b310fcb6a563de420560976';

User.findById(userId).then((user) => {
    if (!user){
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
