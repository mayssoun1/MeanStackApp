var User = require('../models/user');

module.exports = function(router){
//http://localhost:8080/api/users
router.post('/register', function(req,res){
    user = new User();
    user.username=req.body.username;
    user.password=req.body.password;
    user.email=req.body.email;
    if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email== null || req.body.email== ''){
     res.send("Ensure username, email and password are provided");
    }else{
     user.save(function(err){
         if (err){
             res.send("usename or email already exists");
         }else{
            res.send("user created");
         }
     });
    }
    
 });
return router;
}
/*
app.get('/',function(req,res){
    res.send('Hello World ! ');
});*/