const User = require('../models/user');

module.exports.signIn = function(req,res){
    // return res.end('<h1>Express is up for codeial</h1>');
    return res.render('signIn',{
        title:"Sign In"
    });
}

//get data of already registered user and create a session of user
module.exports.createSession = function(req,res){
   //user exists {email}
    User.findOne({email: req.body.email},function(err,user){
         if(err){console.log(`Error in finding user in signing in:${err}`);return;}
          //user found

          if(user){

            //handle password not matched
            if(user.password != req.body.password)
            {
                // alert('Invalid Password');//cannot use node.js is running in the backend while alert is a browser shoring command
                return res.redirect('back');
            }
       

            //handle session creation

            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');

          } else {
            //handle user not found

            return res.redirect('/signUp/');

          }
    });
  
  };
    module.exports.removeSession = function(req,res){
      res.clearCookie('user_id');
      return res.redirect('/signIn/');
    }



   
   

   
