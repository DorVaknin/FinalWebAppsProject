module.exports = (req,res,next) => {
    console.log('cookies are');
    // console.log(req.cookies);
    if (req.cookies){
        const authToken = req.cookies.authToken;
        const expiryDate = 1000 * 60 * 5; // 5 Min
        res.cookie('authToken', authToken, { maxAge: expiryDate });
        next();
    } else{
        console.log('im in auth middleware and have error :(');
        res.status(401).end();
    }
};
