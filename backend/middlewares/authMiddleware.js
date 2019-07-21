module.exports = (req,res,next) => {
    const authToken = req.cookies.authToken;
    if(authToken){
        const expiryDate = 1000 * 60 * 5; // 5 Min
        res.cookie('authToken', authToken, { maxAge: expiryDate });
        next();
    }else{
        res.status(401).end();
    }
}