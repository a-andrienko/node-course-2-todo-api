var mongoose = require('mongoose');

//// User model
//// email

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});
//
//// new ToDo instance2
//var testUser = new User({email: '    test@test.com'});
//
//// save it to database
//testUser.save().then((user) => {
//    console.log('Saved user', user)
//}, (e) => {
//    console.log('Unable to save user', e);
//});

module.exports = {User};