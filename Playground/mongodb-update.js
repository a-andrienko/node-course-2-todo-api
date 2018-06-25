const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    //    db.collection('Todos').findOneAndUpdate({
    //        _id: new ObjectID('5b3104630785ec0695e2b6d9')
    //    }, {
    //        $set: { // update operator
    //            completed: true
    //        }
    //    }, {
    //        returnOriginal: false
    //    }).then((result) => {
    //        console.log(result);
    //    });

    db.collection('Users').findOneAndUpdate({
          name: 'Lina'
    }, {
        $set: { // update operator
            name: 'Lena'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //    db.close();
});