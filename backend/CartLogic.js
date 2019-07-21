const Buyer = require('./models/Buyer');
const mongoose = require('mongoose');
const addItemToBuyer = (userObjectID,itemObjectID) => {
    // //Checks if the item is in the Database
    // isUserExists(userObjectID).then().catch(()=>{
    //      return Promise.reject("User does not exists");
    // });
    // isItemExists(itemObjectID).then().catch(()=>{
    //     return Promise.reject(new Error("Item does not exists"));
    // });
    return Buyer.findOneAndUpdate({_id : mongoose.Types.ObjectId(userObjectID)},{ $push: {Cart: mongoose.Types.ObjectId(itemObjectID)}});    
}


// const isUserExists = (userObjectID) => {
//     Buyer.findById(userObjectID).then((value)=>{
//         if(value == []){
//             return Promise.reject("User does not exists");
//         }else{
//             return Promise.resolve("User exists");
//         }
//     })
// }
// const isItemExists = (itemObjectID) => {
//     Buyer.findById(itemObjectID).then((value)=>{
//         if(value == []){
//             return Promise.reject("Item does not exists");
//         }
//     })
// }
addItem = (req,res) => {
    const userObjectID = req.user._id;
    const itemObjectID = req.params.item_id;
    addItemToBuyer(userObjectID,itemObjectID).then(()=> {
        res.status(200).send("Added the item successfully to the user");
    }).catch((err) => {
        res.status(404).send("The item did not added successfully : " + err);
    })
}

getUserCart = (req,res) => {
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
        res.status(200).send(user.Cart)
    }).catch("Something went wrong");
}
  
module.exports = {
    addItem : addItem,
    getUserCart : getUserCart
}
  