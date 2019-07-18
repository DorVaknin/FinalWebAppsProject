const mongoose = require ('mongoose');
const buyerSchema = mongoose.Schema({
    ID: {type: String, required: true},
    Password: {type: String, required: true},
    Name:  {type: String,required: true},
    LastName: {type: String,required: true},
    TypeOfPet: {type: String,required: true},
    Cart: String
});

module.exports = mongoose.model('Buyer', buyerSchema);

