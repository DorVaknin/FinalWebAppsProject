const mongoose = require ('mongoose');
const buyerSchema = mongoose.Schema({
    ID: {type: String, required: true},
    Password: {type: String, required: true},
    Name:  {type: String},
    LastName: {type: String},
    TypeOfPet: {type: String},
    Cart: [{type:mongoose.Schema.Types.ObjectId, ref : 'Item'}],
    Status: {type:String}
});

module.exports = mongoose.model('Buyer', buyerSchema);

