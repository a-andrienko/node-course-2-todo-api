//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);


// Destructiring example: 
//var user = {name: 'andrew', age: 25};
//var {name} = user;
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    //    db.collection('Todos').insertOne({
    //        text: 'Something to do',
    //        completed: false
    //    }, (err, result) => {
    //        if (err) {
    //            return console.log('Unable to insert ToDo', err);
    //        }
    //        
    //        console.log(JSON.stringify(result.ops, undefined, 2));
    //    })

    // ****************************************

    // insert new doc into Users (name, age, location)

    //    db.collection('Users').insertOne({
    //        name: 'Andrew',
    //        age: 25,
    //        location: 'Philadelphia'
    //    }, (err, result) => {
    //        if (err) {
    //            return console.log('Unable to insert user', err);
    //        }
    //
    ////        console.log(JSON.stringify(result.ops, undefined, 2));
    //        
    //        console.log(result.ops[0]._id.getTimestamp());
    //    })



    db.close();
});