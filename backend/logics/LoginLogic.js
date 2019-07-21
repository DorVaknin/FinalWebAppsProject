const Buyer = require("../models/Buyer");
const encryptor = require("../encryption/encryptor");

const login = (req, res) => {
  const { ID, Password } = req.body; //destructor
  verifyLogin(ID, Password)
    .then(authToken => {
      const expiryDate = 1000 * 60 * 5; // 5 Min
      res.cookie("authToken", authToken, { maxAge: expiryDate });
      res.status(200).send("User logged in succesfully"); //sends cookie automatically
    })
    .catch(() => {
      res.status(401).send("The user is unauthorized");
    });
};

const getUserByIDAndPassword = (ID, encryptedPassword) => {
  return new Promise((resolve, reject) => {
    Buyer.findOne({ ID: ID, Password: encryptedPassword })
      .then(user => {
        if (user == null) {
          reject("Something is wrong with the credentials");
        }
        resolve(user);
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
        resolve(user._id); // returns authentication token
      })
      .catch(() => {
        reject();
      });
  });
};

module.exports = login;
