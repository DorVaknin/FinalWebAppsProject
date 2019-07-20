const router = require("express").Router();
const loginService = require("./LoginLogic");
const authMiddleware = require("./authMiddleware");
const Buyer = require('./models/Buyer');
const Item = require('./models/Item');
const getUserMiddleware = require("./getUserMiddleware");
////////////////////////////////////// TODO - need to add before the authetication middleware the readme file
  // register screen //CHECKED and working
  router.post("/register", loginService.register);
  
  // login screen
  router.post('/login/', loginService.login);
  ///TEST
  //adding items to the DB
  router.post("/admin", (req,res)=>{
      console.log(req.body);
    let item = new Item({
        name: req.body.name,
        desc: req.body.desc,
        productType: req.body.productType,
        pictureURL: req.body.pictureURL,
        price: req.body.price,
        animalType: req.body.animalType
      })
      item.save()
      .then(() => {
        res.status(200).send("The item added successfully to DB");
      })
      .catch(() => {
        res.status(404).send('Request Failed');
      });
  })
router.use(authMiddleware);// using the middleware that we defined
  
  ////////////////////////////////////////
  // admin screen // CHECKED and working.
  router.get("/admin", (req,res)=>{
  //return all users in data base
  Buyer.findOne({ID: ID, Password: encryptedPassword})
    .then(documents => { 
      res.status(200).send(JSON.stringify(documents));
    }).catch(()=>{
      res.status(404).send('Request Failed');
    });
  });
  //adding items to the DB
  router.post("/admin", (req,res)=>{
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
  router.delete("/admin/:id", (req,res) => {
    Buyer.deleteOne({_id: req.params.id})
    .then(() => {
      res.status(200).send("The user deleted successfully");
    }).catch(() => {
      res.status(404).send('Request Failed');
    });
  });
  
  // ////////////////////////
  // //store screen (home screen)
  //
  // router.get('/' (req,res)=>{
  //   // send  user object/entry
  //   // user will have -> user.cart / user.items ...
  // })
  //
  router.use(getUserMiddleware);
  ////////////////////////////////////////
  //// cart screen
  router.get('/cart/', (req,res)=> {
    console.log(req.user);
  });

  const addItemToBuyer = (userObjectID,itemObjectID) => {
      console.log(userObjectID,itemObjectID);
      return Buyer.findByIdAndUpdate(userObjectID,{$push: {Cart: new ObjectId(itemObjectID)}});
  }
  router.post('/cart/:item_id', (req,res) => {
    const userObjectID = req.user._id;
    const itemObjectID = req.params.item_id;
    addItemToBuyer(userObjectID,itemObjectID).then(()=> {
        res.status(200).send("Added the item successfully to the user");
    }).catch(() => {
        res.status(404).send("The item did not added successfully");
    })
  })
  //
  // router.delete('/cart/:user_id/:item_id'){
  //   // send 200 status to user if everything went well
  // }
  //
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
  