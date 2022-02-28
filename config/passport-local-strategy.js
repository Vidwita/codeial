const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
},
 function(email,password,done){
//find the user and establish the identity
   User.findOne({email:email},function(err,user){
       if(err){console.log(`Error in finding user----->Passport:${err}`);return done(err);}
       
       if(!user || user.password!=password)
       {
           console.log('Invalid UserName/Password');
           return done(null,false);
       }
       return done(null,user);
   });
 }

));

//serialized and deserialized user function
//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
});


//deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){console.log("Error in finding user-->passport");return done(err);};
        return done(null,user);
    });
});

//check if the user is authenticated

passport.checkAuthentication = function(req,res,next)
{
    //if the user is authenticated then pass on the request to the next funxtion
    if(req.isAuthenticated()){
        return next();
    }
    //if the user is not signed in
    return res.redirect('/signIn/');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated())
    {
        //req.user contains the current signed in user from the session cookie and we are just sending this to locals for the views
        res.locals.user = req.user;//transferring the req to res
        
    }
    next();
}


module.exports = passport;