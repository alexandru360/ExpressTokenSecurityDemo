var express = require('express');
var app = express();
var log = require('./logger');

// Token get's verified and replaced with a new token on every request
var verifyToken = require('./verify-token');
app.use(verifyToken);

app.get('/', function (req, res) {
    log.debug(req.baseUrl);
    log.debug("GET");
    log.debug(`Header: ${JSON.stringify(req.headers)}`);
    log.debug(`Params: ${JSON.stringify(req.params)}`);
    log.debug(`Body: ${JSON.stringify(req.body)}`);

// Uncomment this if you want to sent the token only on this route !
    // var token = req.headers['x-auth-token'];
    // var newToken = `${token}-newValue`;

    // let oResp = {};
    // oResp.tokenSent = token;
    // oResp.newToken = newToken;
    // oResp.Comment = "Same body new {x-auth-token} Headder = token";

    // res.set('x-auth-token', newToken);
    // res.send(JSON.stringify(oResp));
    res.send("Same body new  !");
});

app.listen(3000);
