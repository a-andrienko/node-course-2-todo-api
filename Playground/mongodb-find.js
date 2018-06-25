//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

/*

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    //    db.collection('Todos').find({
    //        _id: new ObjectID('5b30f6fd56edc813fc3c6808')
    //    }).toArray().then((docs) => {
    //        console.log('Todos');
    //        console.log(JSON.stringify(docs, undefined, 2));
    //    }, (err) => {
    //        console.log('Unable to fetch todos', err);
    //    });

    
       db.collection('Todos').find().count().then((count) => {
            console.log(`Todos count: ${count}`);
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });

    //    db.close();
});

*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
        db.collection('Users').find({
            name: 'Anna'
        }).toArray().then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users', err);
        });


    //    db.close();
});