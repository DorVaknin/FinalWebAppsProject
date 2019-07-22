const Buyer = require("../models/Buyer");
const encryptor = require("../encryption/encryptor");

const register = (req, res) => {
  let buyer = new Buyer({
    ID: req.body.ID,
    Password: encryptor(req.body.Password.trim()),
    Name: req.body.Name,
    LastName: req.body.LastName,
    TypeOfPet: req.body.TypeOfPet,
    Cart: req.body.Cart
  });
  buyer
    .save()
    .then(() => {
      return res.status(200).send("The buyer added successfully to DB");
    })
    .catch(err => {
      return res.status(404).send("Request Failed" + err);
    });
};


module.exports = register;