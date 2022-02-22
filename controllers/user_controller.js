const User = require('../models/user');


module.exports.Profile = function(req,res){

    if(req.cookies.user_id)
    {
        User.findById(req.cookies.user_id,function(err,user){
            if(user)
            {
                return res.render('user-profile',{
                    title:"User Profile",
                    user : user})

            } 

            return res.redirect('/signIn/'); //asynchronous javascript

        });

    }else{
        return res.redirect('/signIn/')
    }
    

}