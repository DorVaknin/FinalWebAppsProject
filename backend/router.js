const router = require("express").Router();

const Buyer = require('./models/buyerModel');
const Item = require('./models/itemModel');
const encryptor = require('./encryptor');

////////////////////////////////////// TODO - need to add before the authetication middleware the readme file
  // register screen //CHECKED and working
  router.post("/register", (req,res)=> {
    // update data base
    let buyer = new Buyer({
      ID: req.body.ID,
      Password: encryptor(req.body.Password.trim()),
      Name: req.body.Name,
      LastName: req.body.LastName,
      TypeOfPet: req.body.TypeOfPet,
      Cart: req.body.Cart
    })
    buyer.save()
    .then(() => {
      res.status(200).send("The buyer added successfully to DB");
    })
    .catch(() => {
      res.status(404).send('Request Failed');
    });
  });
  
  const getUserByIDAndPassword = (ID, encryptedPassword) => {
  return new Promise((resolve, reject) =>{
    Buyer.findOne({ID: ID, Password: encryptedPassword})
    .then((user) => {
      if(user == null){
        reject("Something is wrong with the credentials")
      }
      resolve(user);
    }).catch(()=>{
      reject("Something is wrong with the credentials");
    });
  });
  }
  const verifyLogin = (ID, password) => {
    return new Promise((resolve,reject)=> {
      const encryptedPass = encryptor(password.trim());
      getUserByIDAndPassword(ID, encryptedPass).then(user => {
        resolve(user._id); // returns authentication token
      }).catch(() => {
        reject();
      })
    })
  }

//////////////////////////////////////
  // login screen
  router.post('/login/', (req,res) => {
    const {ID, Password} = req.body;//destructor
    verifyLogin(ID,Password).then((authToken)=>{//authToken is user._id
      const expiryDate = 1000 * 60 * 5 // 5 Min
      res.cookie('authToken', authToken, { maxAge: expiryDate });
      res.status(200).send("User logged in succesfully");//sends cookie automatically
    }).catch(()=>{
      res.status(401).send("The user is unauthorized");
    });
  })
  

const authenticationMiddleware = (req,res,next) => {
    const authToken = req.cookies.authToken;
    if(authToken){
        const expiryDate = 1000 * 60 * 5 // 5 Min
        res.cookie('authToken', authToken, { maxAge: expiryDate });
        next();
    }else{
        res.status(401).end();
    }
}
router.use(authenticationMiddleware);// using the middleware that we defined
////////////////////////////////
///TEST //CHECKED and working
router.get("/", (req,res)=>{
    res.send("Hey friends");
  });
  
  ////////////////////////////////////////
  // admin screen // CHECKED and working.
  router.get("/admin", (req,res)=>{
  //return all users in data base
  Buyer.find()
    .then(documents => { 
      res.status(200).send(JSON.stringify(documents));
    }).catch(()=>{
      res.status(404).send('Request Failed');
    });
  });
  
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
  // //////////////////////////////////////
  // // cart screen
  // router.get('/cart/:user_id' (req,res)=>{
  //   // get MONGO(user_id, cart)
  //   // get cart items
  //   // res.items
  // })
  //
  // router.post('/cart/:user_id/:item_id' (req,res)=>{
  //   // Put in cart -> MONGO.put(user_id,item);
  //   // add cart item
  //   // send 200 status to user if everything went well
  // })
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
  