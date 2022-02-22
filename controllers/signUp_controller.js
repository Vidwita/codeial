const User = require('../models/user');

module.exports.signUp = function(req,res){
    // return res.end('<h1>Express is up for codeial</h1>');
    return res.render('signUp',{
        title:"Sign Up"
    });
}


//get the sign Up data
module.exports.create = function(req,res){
    //todo
    if(req.body.password != req.body.confirm_password)
    {
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err)
        {
            console.log('Error in finding user in SignUp');
            return;
        }

        if(!user)
        {
            User.create(req.body,function(err,user){
                if(err)
                {
                    console.log('Error in creating user in SignUp');
                    return;
                } 

                return res.redirect('/signIn/');
            })
        }
        else{
            return res.redirect('back');
        }
    })


}