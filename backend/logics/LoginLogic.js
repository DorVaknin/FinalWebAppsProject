const Buyer = require('../models/Buyer');;
const encryptor = require('../encryption/encryptor');
////////////////////////////////////// TODO - need to add before the authetication middleware the readme file
  // register screen //CHECKED and working
  const register = (req,res)=> {
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
    .catch((err) => {
      res.status(404).send('Request Failed' + err);
    });
}
  
  
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
 const login = (req,res) => {
    const {ID, Password} = req.body;//destructor
    verifyLogin(ID,Password).then((authToken)=>{//authToken is user._id
      const expiryDate = 1000 * 60 * 5 // 5 Min
      res.cookie('authToken', authToken, { maxAge: expiryDate });
      res.status(200).send("User logged in succesfully");//sends cookie automatically
    }).catch(()=>{
      res.status(401).send("The user is unauthorized");
    });
 }


module.exports = {
    register: register,
    login: login
}
  