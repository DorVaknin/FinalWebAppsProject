const mongoose = require ('mongoose');

const itemSchema = mongoose.Schema({
    name: String,
    desc: String,
    Product_type: String,
    pictureURL: String,
    price: Number,
    Animal_type: String,
    guid: Number
});

module.exports = mongoose.model('User', itemSchema);

