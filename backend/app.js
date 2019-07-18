var express = require('express');
var config = require('./config');
const bodyParser = require("body-parser");
var mongoose = require('mongoose');

var Buyer = require('./models/buyerModel');
var Item = require('./models/itemModel');
var app = express();

mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true })
    .then(()=> {
        console.log('Connected to database!');
    })
    .catch(() => {
        console.log('Connection failed');
    });

////////////////////////////////
///TEST
app.get("/", (req,res)=>{
  res.send("Hey friends");
});

// //////////////////////////////////////
// // admin screen
// app.get("/admin", (req,res)=>{
//   // return all users in data base
// });

//////////////////////////////////////
// register screen
app.post("/register", (req,res)=>{
  // update data base
  console.log("Heta!");
  let buyer = new Buyer({
    ID: req.body.ID,
    Password: req.body.password,
    Name: req.body.Name,
    LastName: req.body.LastName,
    TypeOfPet: req.body.TypeOfPet,
    Cart: []
  });
  buyer.save();
  console.log(buyer);
  res.status(200).json({message: 'Post added successfully'});
});


// //////////////////////////////////////
// // login screen
// app.get('/:user_name:password' (req,res)=>{
//   // check in data base
//   // return cookie
// })
//
//
// app.post('/login/...' (req,res)=>{
//   // update data base
// })
//
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
// app.delete('/cart/user_id/:item_id'){
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
