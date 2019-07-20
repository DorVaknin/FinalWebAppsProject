const Buyer = require('./models/Buyer');

const getUserMiddleware =  (req,res,next) => {
    const authToken = req.cookies.authToken;
    getUserByObjectID(authToken).then(user => {
        req.user = user;
        next();
    })
}
const getUserByObjectID = (userObjectID) => Buyer.findOne({_id : userObjectID}); 
module.exports = getUserMiddleware;