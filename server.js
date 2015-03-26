// initial setup
var express = require('express');
var app = express();

// set the port
var port = 3000;

// get an instance of the Express Router
var router = express.Router();

// middleware to use for all requests (validation can be done here)
router.use(function(req, res, next) {
    console.log('exapi is running.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to exapi!' });
});

router.post('/dataChange', function(req,res){
    res.send('Hi I am from backened!!');
}

// on routes that end in /details
router.route('/details')
    .get(function(req, res) {
        res.json({"name":"John Doe",
                  "street":"1234 West Palm Beach",
                  "phone":"555 1234567",
                  "zip":'12345'
        });
    })

// all of the routes wil be prefixed with /api
app.use('/', router);

// start the server
app.listen(port);
console.log('exapi is listening on port %s', port);




/*var express=require('express'); //we re including the express API
var app=express();  
    require('./router/main')(app)   //here we are adding our main.js file instead of writing the routing code here for routing to take place
    app.set('views',__dirname + '/views');//This line defines where our html files are placed. so that they can be read and rendered.
    //app.set('Widget',__dirname + '/Widget');

    app.set('view engine', 'ejs');//
    app.engine('html',require('ejs').renderFile);   //this line tells server that we are actually rendering html file through ExpressJS
var server=app.listen(3000,function(){  //creating a listener to listen to port 3000. using function callback
    console.log("We have started our server on port 3000");
});*/