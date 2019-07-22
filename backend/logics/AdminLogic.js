const Buyer = require('../models/Buyer');

const getUser = (req, res) => {
  objectid = req.params.objectid
  isUserExists(objectid)
    .then(user => {
      console.log(user);
      if (user === null) {
        return res.status(404).send("User does not exists in the database");
      } else {
        return res.status(200).send(user);
      }
    })
    .catch(() => {
      return res.status(404).send("Something is wrong with the request");
    });
};

isUserExists = (objectid) => Buyer.findOne({ _id: objectid})      

const getAllUsers = (req, res) => {
    Item.find({})
      .then(allItems => {
        return res.status(200).send(allItems);
      })
      .catch(() => {
        return res.status(404).send("Something is wrong with the request");
      });
  };

addItem = (req, res) => {
    let item = new Item({
      name: req.post.name,
      desc: req.post.desc,
      productType: req.post.productType,
      pictureURL: req.post.pictureURL,
      price: req.post.price,
      animalType: req.post.animalType
    });
    item
      .save()
      .then(() => {
        return res.status(200).send("The item added successfully to DB");
      })
      .catch(() => {
        return res.status(404).send("Request Failed");
      });
  };

deleteUser = (req, res) => {
    objectid = req.params.objectid;
    isUserExists(objectid).then((user)=>{
      if(user == null){
        return res.status(404).send("User not found");
      }else{
        Buyer.deleteOne({ _id: req.params.objectid })
        .then(() => {
          return res.status(200).send("The user deleted successfully");
        })
        .catch((err) => {
          return res.status(404).send("Request Failed" + err);
        });
      }
    }).catch((err)=>{
        return res.status("Request failed" + err);
    });
  };

module.exports = {
    getUser : getUser,
    getAllUsers: getAllUsers,
    addItem: addItem,
    deleteUser : deleteUser
}