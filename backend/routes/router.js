const router = require("express").Router();
const loginService = require("../logics/LoginLogic");
const authMiddleware = require("../middlewares/authMiddleware");
const Buyer = require('../models/Buyer');
const Item = require('../models/Item');
const getUserMiddleware = require("../middlewares/getUserMiddleware");
const cartLogic = require("../logics/CartLogic");

// TODO - need to add before the authetication middleware the readme file
  // register screen //CHECKED and working
  router.post("/register", loginService.register);
  // login screen
  router.post('/login', loginService.login);
  
  ////////////////////////////////////////
  // admin screen 
  router.get("/admin/getUser/:objectid", (req,res)=>{// CHECKED AND WORKING.
  //return all users in data base
  Buyer.findOne({_id: req.params.objectid})
    .then((user) => {
      if(user == null){
        res.status(404).send("User does not exists in the database");
      }else{
        res.status(200).send(user);
      }
    }).catch(()=>{
      res.status(404).send("Something is wrong with the request");
    });
  });
  
  router.get("/admin/getallitems", (req,res)=>{//CHECKED AND WORKING
    //return all users in data base
    Item.find({})
      .then((allItems) => {
        res.status(200).send(allItems);
      }).catch(()=>{
        res.status(404).send("Something is wrong with the request");
      });
    });

  //adding items to the DB//CHECKED AND WORKING
  router.post("/admin/additem", (req,res)=>{
    let item = new Item({
        name: req.post.name,
        desc: req.post.desc,
        productType: req.post.productType,
        pictureURL: req.post.pictureURL,
        price: req.post.price,
        animalType: req.post.animalType
      })
      item.save()
      .then(() => {
        res.status(200).send("The item added successfully to DB");
      })
      .catch(() => {
        res.status(404).send('Request Failed');
      });
  })

  //delete users in admin screen // CHECKED and working.
  router.delete("/admin/deleteuser/:objectid", (req,res) => {
    Buyer.deleteOne({_id: req.params.objectid})
    .then(() => {
      res.status(200).send("The user deleted successfully");
    }).catch(() => {
      res.status(404).send('Request Failed');
    });
  });

  router.use(authMiddleware); 
  router.use(getUserMiddleware);
  //cart screen
  router.get('/cart/getusercart', cartLogic.getUserCart);//Checked and working
  router.post('/cart/addItem/:item_id', cartLogic.addItem);//Checked and working
  router.delete('/cart/deleteItem/:item_id', cartLogic.deleteItem);//Checked and working

  // //////////////////////////////////////
  // // checkout screen
  // router.get('/checkout/:user_id' (req,res)=>{
  //   // get MONGO(user_id, cart)
  //   // get cart items
  //   // res.items
  // })
  //
  // router.delete('/checkout/purchase'){
  //   // after we bought whats in the cart we need to delete it
  // }

  module.exports = router;
