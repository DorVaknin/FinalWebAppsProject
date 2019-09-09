const Buyer = require("../models/Buyer");
const encryptor = require("../encryption/encryptor");
const authMiddleware = require("../middlewares/authMiddleware");
const router = require("express").Router();

const login = (req, res) => {
  const ID = req.body.ID;
  const Password = req.body.Password;
  const rememberMe = req.body.rememberMe;
  verifyLogin(ID, Password)
    .then(user => {
      console.log("I'm in loginLogic");
      const expiryDate = rememberMe ? 2^31 : 1000 * 60 * 5; // 5 Min or remembers if rememberme is true.
      res.cookie("authToken", user._id, { maxAge: expiryDate });
      router.use(authMiddleware);
      console.log(res);
      return res.status(200).send({message: "User logged in succesfully", isAdmin: user.ID === 'admin'}); //sends cookie automatically
    })
    .catch((err) => {
      console.log("Failed loginlogic");
      console.log(err);
      return res.status(401).send("The user is unauthorized");
    });
};

const getUserByIDAndPassword = (ID, encryptedPassword) => {
  return new Promise((resolve, reject) => {
    Buyer.findOne({ ID: ID, Password: encryptedPassword })
      .then(user => {
        if (user == null) {
          reject("Something is wrong with the credentials");
        }
        if (user.ID === 'admin'){
          user.isAdmin = true;
          resolve(user);
        } else {
          user.isAdmin = false;
          resolve(user)
        }
      })
      .catch(() => {
        reject("Something is wrong with the credentials");
      });
  });
};

const verifyLogin = (ID, password) => {
  return new Promise((resolve, reject) => {
    const encryptedPass = encryptor(password.trim());
    getUserByIDAndPassword(ID, encryptedPass)
      .then(user => {
        resolve(user); // returns authentication token
      })
      .catch(() => {
        reject();
      });
  });
};

module.exports = login;
