const mongoose = require ('mongoose');

const itemSchema = mongoose.Schema({
    name: String,
    desc: String,
    productType: String,
    pictureURL: String,
    price: Number,
    animalType: String,
    guid: String
});

module.exports = mongoose.model('User', itemSchema);

