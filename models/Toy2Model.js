var mongoose = require('mongoose');
var Toy2Shema = mongoose.Schema({
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

var Toy2Model = mongoose.model('toy2', Toy2Shema, 'toy2');
module.exports = Toy2Model;
