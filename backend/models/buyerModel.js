const mongoose = require ('mongoose');

const buyerSchema = mongoose.Schema({
    ID: {type: String, required: true},
    Password: {type: String, required: true},
    Name:  String,
    LastName: String,
    Cart: { Name: String, Description: String, Price: Number, Photo : String},
    TypeOfPet: String
});

module.exports = mongoose.model('User', buyerSchema);

