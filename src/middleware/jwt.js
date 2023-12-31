require('dotenv').config();
const jwt = require('jsonwebtoken');


module.exports = function(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        //debug
        //console.log(req.user.username);
        next();
    } catch (err) {
        //debug
        console.log(err);
        res.status(400).send('Invalid Token');
    }
};