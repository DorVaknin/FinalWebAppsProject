const Buyer = require('../models/Buyer');
const mongoose = require('mongoose');
const Item = require('../models/Item');

const addItemToBuyer = (userObjectID,itemObjectID) => {
    return Buyer.findOneAndUpdate({_id : mongoose.Types.ObjectId(userObjectID)},{ $push: {Cart: mongoose.Types.ObjectId(itemObjectID)}});    
}

const deleteItemFromBuyer = (userObjectID,itemObjectID) => {
  return Buyer.findOneAndUpdate({_id : mongoose.Types.ObjectId(userObjectID)},{ $pull: {Cart: mongoose.Types.ObjectId(itemObjectID)}});    
}

isItemExists = (itemObjectID) => Item.findOne({ _id: itemObjectID})

const addItem = (req,res) => {
    const userObjectID = req.user._id;
    const itemObjectID = req.params.item_id;
    isItemExists(itemObjectID).then((item)=>{
      if (item == null) {
        return res.status(404).send("Item does not exists in the database");
      }else{
        addItemToBuyer(userObjectID,itemObjectID).then(()=> {
          return res.status(200).send("Added the item successfully to the user");
        }).catch((err) => {
          return res.status(404).send("Request Failed" + err);
        });
      }
    }).catch((err) => {
      return res.status(404).send("Request Failed" + err);
    });
}

const deleteItem = (req,res) => {
  const userObjectID = req.user._id;
  const itemObjectID = req.params.item_id;
  isItemExists(itemObjectID).then((item)=>{
    if (item == null) {
      return res.status(404).send("Item does not exists in the database");
    }
    else{
      deleteItemFromBuyer(userObjectID,itemObjectID).then(()=> {
        return res.status(200).send("Deleted the item successfully from the user's cart");
      }).catch((err) => {
        return res.status(404).send("Request Failed" + err);
      });
    }
  }).catch((err) => {
    return res.status(404).send("Request Failed" + err);
  });
  
}

const getUserCart = (req,res) => {
    return new Promise((resolve, reject) =>{
      Buyer.findOne({_id : req.user._id})
      .then((user) => {
        if(user == null){
          reject("The user does not exists")
        }
        resolve(user);
      }).catch(()=>{
        reject("Something went wrong");
      });
    }).then((user)=>{
      return res.status(200).send(user.Cart)
    }).catch((err) => {
      return res.status(404).send("Request Failed" + err);
    });
}
  
module.exports = {
    addItem : addItem,
    getUserCart : getUserCart,
    deleteItem: deleteItem
}
  