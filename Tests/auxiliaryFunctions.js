
const Buyer = require("../backend/models/Buyer");
const Item = require("../backend/models/Item");

// const Buyer = require("..//models/Item");


isItemExists = itemObjectID =>
  Item.findOne({ _id: itemObjectID })
    .then(item => {//
      if (item == null) {//does not exists in database
        return false;
      } else {
        return true;
      }
    }) 
    .catch(err => {
      return res.status(404).send("Request Failed" + err);
    });

  
isUserExistByID = userObjectID =>
Buyer.findOne({ _id: userObjectID })
  .then(user => {
    if (user == null) {//does not exists in database
      return false;
    } else {//
      return true;
    }
  }) 
  .catch(err => {
    return res.status(404).send("Request Failed" + err);
  });

isUserExistByUsername =  async usernameID => {
Buyer.find({}).then(user => {
    if (user.length === 0) {//does not exists in database
      return false;
    } else {
      return true;
    }
  }) 
  .catch(err => {
    return res.status(404).send("Request Failed" + err);
  })
}
module.exports = {
  isItemExists: isItemExists,
  isUserExistByID: isUserExistByID,
  isUserExistByUsername: isUserExistByUsername
};
