const router = require("express").Router();
const loginLogic = require("../logics/LoginLogic");
const generalLogic = require("../logics/GeneralLogic");
const storeLogic = require("../logics/storeLogic");
const adminLogic = require("../logics/AdminLogic");
const registerLogic = require("../logics/RegisterLogic");
const cartLogic = require("../logics/CartLogic");
const authMiddleware = require("../middlewares/authMiddleware");
const addUserFieldMiddleware = require("../middlewares/addUserFieldMiddleware");

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// register screen
router.post("/register", registerLogic);

// login screen
router.post("/login", loginLogic);

// middlewares (only for backend usage)
// router.use(authMiddleware);
router.use(addUserFieldMiddleware);


// admin screen
router.get("/admin/getallusers", adminLogic.getAllUser);
router.get("/admin/getallitems", adminLogic.getAllItems);
router.post("/admin/additem", adminLogic.addItem);
router.delete("/admin/deleteuser/:objectid", adminLogic.deleteUser);
router.get("/admin/filter/bynameandlastname/:name/:lastname", adminLogic.filterByNameLastName);
router.get("/admin/filter/byobjectid/:objectid", adminLogic.filterUserByObjectId);


//cart + checkout screen
router.get("/cart/getusercart", cartLogic.getUserCart);
router.post("/cart/additem/:item_id", cartLogic.addItem);
router.delete("/cart/deleteItem/:item_id", cartLogic.deleteItem);
router.delete("/cart/deleteAllItems", cartLogic.deleteAllItems);


//store screen
router.get("/store/search/", adminLogic.getAllItems);
router.get("/store/search/:searchedText", storeLogic.search);
router.post("/addpurchase/:item_id", storeLogic.addPurchase);


//This route should be called by frontend in every activity change of the user.
router.post("/setstatusbyid/:status", generalLogic.setStatus);


//redirecting all the other pages to our default page
router.get('*', function(req, res){
    res.redirect('/defaultPage.html');
});

module.exports = router;
