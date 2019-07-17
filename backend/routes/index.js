var express = require('express');
var buyerModel = require('./models/buyerModel');
var itemModel = require('./models/itemModel');
var router = express.Router();

//////////////////////////////////////
// admin screen
app.get('/admin' (req,res)=>{
  // return all users in data base
})

//////////////////////////////////////
// register screen
app.post('/login/...' (req,res)=>{
  // update data base
})


//////////////////////////////////////
// login screen
app.get('/:user_name:password' (req,res)=>{
  // check in data base
  // return cookie
})


app.post('/login/...' (req,res)=>{
  // update data base
})

////////////////////////
//store screen (home screen)

app.get('/' (req,res)=>{
  // send  user object/entry
  // user will have -> user.cart / user.items ...
})

//////////////////////////////////////
// cart screen
app.get('/cart/:user_id' (req,res)=>{
  // get MONGO(user_id, cart)
  // get cart items
  // res.items
})

app.post('/cart/:user_id/:item_id' (req,res)=>{
  // Put in cart -> MONGO.put(user_id,item);
  // add cart item
  // send 200 status to user if everything went well
})

app.delete('/cart/user_id/:item_id'){
  // send 200 status to user if everything went well
}

//////////////////////////////////////
// checkout screen
app.get('/checkout/:user_id' (req,res)=>{
  // get MONGO(user_id, cart)
  // get cart items
  // res.items
})

app.delete('/checkout/purchase'){
  // after we bought whats in the cart we need to delete it
}



module.exports = router;
