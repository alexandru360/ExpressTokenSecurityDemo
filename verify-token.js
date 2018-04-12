var tokenOperations = require('./token-operations');

function verifyToken(req, res, next) {
    var token = req.headers['x-auth-token'];

    res.set('x-auth-token', tokenOperations(token));
    next();
}

module.exports = verifyToken;
