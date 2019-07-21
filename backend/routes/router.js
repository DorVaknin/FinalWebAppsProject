const router = require("express").Router();
const loginLogic = require("../logics/LoginLogic");
const adminLogic = require("../logics/AdminLogic");
const cartLogic = require("../logics/CartLogic");
const authMiddleware = require("../middlewares/authMiddleware");
const Buyer = require("../models/Buyer");
const Item = require("../models/Item");
const getUserMiddleware = require("../middlewares/getUserMiddleware");

//TODO - need to add before the authetication middleware the readme file
// register screen
router.post("/register", loginLogic.register);

// login screen
router.post("/login", loginLogic.login);

// middlewares
router.use(authMiddleware);
router.use(getUserMiddleware);

// admin screen
router.get("/admin/getUser/:objectid", adminLogic.getUser);
router.get("/admin/getallitems", adminLogic.getAllUsers);
router.post("/admin/additem", adminLogic.addItem);
router.delete("/admin/deleteuser/:objectid", deleteItem);

//cart + checkout screen
router.get("/cart/getusercart", cartLogic.getUserCart); //Checked and working, can be used for checkout screen too.
router.post("/cart/addItem/:item_id", cartLogic.addItem); //Checked and working
router.delete("/cart/deleteItem/:item_id", cartLogic.deleteItem); //Checked and working, can be used for checkout screen too

module.exports = router;
