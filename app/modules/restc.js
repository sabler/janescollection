// RestifyJS
const restify = require('restify');

const codeServ = restify.createServer( {
    name: 'FriendsFamily',
    version:'1.0'
});


function baseResponse(req, res, next) {
    res.send("I'm here!");
    next();
}

codeServ.get('/friendsfamily/jj/:empId', baseResponse);
