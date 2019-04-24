console.log("Trying to pull-start the app like your dad's old lawnmower...")

const mdbc = require('./modules/mdbc.js')

// RestifyJS
const restify = require('restify');


// New instance of the server
const codeServ = restify.createServer( {
    name: 'FriendsFamily',
    version:'1.0'
});


// Function for initial testing, remove before deployment
function baseResponse(req, res, next) {
    res.send(`I'm here, employee ${req.params.empId}`);
    next(false);
}


// Get end point syntax
codeServ.get('/friendsfamily/jj/:empId', baseResponse);


// Frasier Reference
codeServ.listen(8000,function() {
    console.log("Go ahead, I'm listening...");
})
