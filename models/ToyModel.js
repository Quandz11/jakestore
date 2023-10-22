var mongoose = require('mongoose');
var ToyShema = mongoose.Schema({
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

var ToyModel = mongoose.model('toy', ToyShema, 'toy');
module.exports = ToyModel;
