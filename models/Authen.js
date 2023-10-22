var mongoose = require('mongoose');
var AuthenSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
     },
     password: {
        type: String,
        required: true
     }
})

var AuthenModel = mongoose.model('user', AuthenSchema, 'user');
module.exports = AuthenModel;