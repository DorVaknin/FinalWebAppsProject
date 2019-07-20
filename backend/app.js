var express = require('express');
var config = require('./config');
var app = express();
const bodyParser = require('body-parser')
var mongoose = require('mongoose');

var Buyer = require('./models/buyerModel');
var Item = require('./models/itemModel');
var encryptor = require('./encryptor');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//CHECKED and working.
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true })
    .then(()=> {
        console.log('Connected to database!');
    }).catch(() => {
        console.log('Connection failed');
    });

////////////////////////////////
///TEST //CHECKED and working
app.get("/", (req,res)=>{
  res.send("Hey friends");
});

////////////////////////////////////////
// admin screen // CHECKED and working.
app.get("/admin", (req,res)=>{
//return all users in data base
Buyer.find()
  .then(documents => { 
    res.status(200).send(JSON.stringify(documents));
  }).catch(()=>{
    res.status(404).send('Request Failed');
  });
});

//delete users in admin screen // CHECKED and working.
app.delete("/admin/:id", (req,res) => {
  Buyer.deleteOne({_id: req.params.id})
  .then(() => {
    res.status(200).send("The user deleted successfully");
  }).catch(() => {
    res.status(404).send('Request Failed');
  });
});

//////////////////////////////////////
// register screen //CHECKED and working
app.post("/register", (req,res)=> {
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
app.post('/login/', (req,res) => {
  const {ID, Password} = req.body;//destructor
  verifyLogin(ID,Password).then((authToken)=>{//authToken is user._id
    const expiryDate = 1000 * 60 * 5 // 5 Min
    res.cookie('authToken', authToken, { maxAge: expiryDate });
    res.status(200).send("User logged in succesfully");//sends cookie automatically
  }).catch(()=>{
    res.status(401).send("The user is unauthorized");
  });
})


// ////////////////////////
// //store screen (home screen)
//
// app.get('/' (req,res)=>{
//   // send  user object/entry
//   // user will have -> user.cart / user.items ...
// })
//
// //////////////////////////////////////
// // cart screen
// app.get('/cart/:user_id' (req,res)=>{
//   // get MONGO(user_id, cart)
//   // get cart items
//   // res.items
// })
//
// app.post('/cart/:user_id/:item_id' (req,res)=>{
//   // Put in cart -> MONGO.put(user_id,item);
//   // add cart item
//   // send 200 status to user if everything went well
// })
//
// app.delete('/cart/:user_id/:item_id'){
//   // send 200 status to user if everything went well
// }
//
// //////////////////////////////////////
// // checkout screen
// app.get('/checkout/:user_id' (req,res)=>{
//   // get MONGO(user_id, cart)
//   // get cart items
//   // res.items
// })
//
// app.delete('/checkout/purchase'){
//   // after we bought whats in the cart we need to delete it
// }


app.listen(8080);
console.log('Server running at http://127.0.0.1:8080');
module.exports = app;
