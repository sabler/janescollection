console.log("Howdy from index.js!")
const mdbc = require('./modules/mdbc.js')


// RestifyJS
const restify = require('restify');

const codeServ = restify.createServer( {
    name: 'FriendsFamily',
    version:'1.0'
});


function baseResponse(req, res, next) {
    res.send(`I'm here, employee ${req.params.empId}`);
    next();
}

codeServ.get('/friendsfamily/jj/:empId', baseResponse);


codeServ.listen(8000,function() {
    console.log("Go ahead, I'm listening...");
})
