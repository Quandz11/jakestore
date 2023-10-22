var mongoose = require('mongoose');
var Toy3Shema = mongoose.Schema({
    name : {
        type : String,
        require : [true, 'Name can not be empty']
    },
    material : {
        type : String,
        require : [true, 'Material can not be empty']
    },
    brand : String,
    price : Number,
    size : Number,
    color : String,
    image : String
})

var Toy3Model = mongoose.model('toy3', Toy3Shema, 'toy3');
module.exports = Toy3Model;
