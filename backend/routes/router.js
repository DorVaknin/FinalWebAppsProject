const router = require("express").Router();
const loginLogic = require("../logics/LoginLogic");
const storeLogic = require("../logics/storeLogic");
const adminLogic = require("../logics/AdminLogic");
const registerLogic = require("../logics/RegisterLogic");
const cartLogic = require("../logics/CartLogic");
const authMiddleware = require("../middlewares/authMiddleware");
const getUserMiddleware = require("../middlewares/getUserMiddleware");

//TODO - need to add before the authetication middleware the readme file
// register screen
router.post("/register", registerLogic);

// login screen
router.post("/login", loginLogic);

// middlewares (only for backend usage)
router.use(authMiddleware);
router.use(getUserMiddleware);

// admin screen
router.get("/admin/getallitems", adminLogic.getAllUsers);
router.post("/admin/additem", adminLogic.addItem);
router.delete("/admin/deleteuser/:objectid", adminLogic.deleteUser);
router.get("/admin/filter/bynameandlastname/:name/:lastname", adminLogic.filterByNameLastName);
router.get("/admin/filter/byobjectid/:objectid", adminLogic.filterUserByObjectId);


//cart + checkout screen
router.get("/cart/getusercart", cartLogic.getUserCart); //Checked and working, can be used for checkout screen too.
router.post("/cart/additem/:item_id", cartLogic.addItem); //Checked and working
router.delete("/cart/deleteItem/:item_id", cartLogic.deleteItem); //Checked and working, can be used for checkout screen too

//store screen
router.get("/store/search/:searchedText", storeLogic.search);


module.exports = router;
