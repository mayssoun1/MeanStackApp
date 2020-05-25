var express = require("express");
var app = express();
var port =process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require("mongoose");
var router = express.Router();
var appRoutes = require("./app/routes/api")(router);
var bodyParser = require('body-parser');
var path = require('path');

//MIDDELWARES
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public')); // give access for static files location
app.use('/api',appRoutes); // for backend routes
app.use(morgan('dev'));


// Connect to Mongoose

mongoose.connect('mongodb://localhost:27017/tutorial',{ useNewUrlParser: true,useUnifiedTopology: true },function(err){
    if(err){
        console.log('Not connected to database' + err);
    }else{
        console.log("Successfully connected to MongoDB");
    }
});

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html')); // our main layout
})

app.listen(port , function(){
    console.log("server running on port "+port);
});
