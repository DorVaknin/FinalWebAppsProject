module.exports = (req,res,next) => {

    // console.log(req);
    let authToken;
    if (req.cookies) {
        authToken = req.cookies.authToken;
    }
    console.log('im in auth middleware');
    if(authToken){
        const expiryDate = 1000 * 60 * 5; // 5 Min
        res.cookie('authToken', authToken, { maxAge: expiryDate });
        next();
    }else{
        console.log('im in auth middleware and have error :(');
        res.status(401).end();
    }
}