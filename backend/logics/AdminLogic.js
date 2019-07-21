const getUser = (req, res) => {
  // CHECKED AND WORKING.
  Buyer.findOne({ _id: req.params.objectid })
    .then(user => {
      if (user == null) {
        res.status(404).send("User does not exists in the database");
      } else {
        res.status(200).send(user);
      }
    })
    .catch(() => {
      res.status(404).send("Something is wrong with the request");
    });
};

const getAllUsers = (req, res) => {
    Item.find({})
      .then(allItems => {
        res.status(200).send(allItems);
      })
      .catch(() => {
        res.status(404).send("Something is wrong with the request");
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
        res.status(200).send("The item added successfully to DB");
      })
      .catch(() => {
        res.status(404).send("Request Failed");
      });
  };

deleteItem = (req, res) => {
    Buyer.deleteOne({ _id: req.params.objectid })
      .then(() => {
        res.status(200).send("The user deleted successfully");
      })
      .catch(() => {
        res.status(404).send("Request Failed");
      });
  };

module.exports = {
    getUser : getUser,
    getAllUsers: getAllUsers,
    addItem: addItem,
    deleteItem : deleteItem
}