var mongoose = require("mongoose");


var productSchema = new mongoose.Schema({
    name : String,
    cost : Number,
    image : String,
    brand : String,
    color : String,
    support : Number
})


module.exports = mongoose.model('Product',productSchema)