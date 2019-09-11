
const Buyer = require("../backend/models/Buyer");
const Item = require("../backend/models/Item");

// const Buyer = require("..//models/Item");


isItemExists = itemObjectID =>
  Item.findOne({ _id: itemObjectID })
    .then(item => {
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
    } else {
      return true;
    }
  }) 
  .catch(err => {
    return res.status(404).send("Request Failed" + err);
  });

isUserExistByUsername =  async usernameID => {
console.log("Hey1");
Buyer.find({}).then(user => {
    console.log("Hey2");
    if (user.length === 0) {//does not exists in database
      console.log("Hey2");
      return false;
    } else {
      console.log("Hey3");
      return true;
    }
  }) 
  .catch(err => {
    console.log("hey4");
    return res.status(404).send("Request Failed" + err);
  })
  console.log("Hey5")
}
module.exports = {
  isItemExists: isItemExists,
  isUserExistByID: isUserExistByID,
  isUserExistByUsername: isUserExistByUsername
};
