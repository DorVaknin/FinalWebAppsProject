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

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// register screen
router.post("/register", registerLogic);

// login screen
router.post("/login", loginLogic);

// middlewares (only for backend usage)
router.use(authMiddleware);
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
router.get("/store/search/:searchedText", storeLogic.search);
router.post("/addpurchase/:item_id", storeLogic.addPurchase);


//This route should be called by frontend in every activity change of the user.
router.post("/setstatusbyid/:status", generalLogic.setStatus);


//redirecting all the other pages to our default page
router.get('*', function(req, res){
    res.redirect('/defaultPage.html');
});

module.exports = router;
