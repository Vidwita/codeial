module.exports.signIn = function(req,res){
    // return res.end('<h1>Express is up for codeial</h1>');

    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }

    return res.render('signIn',{
        title:"Sign In"
    });
}

//get data of already registered user and create a session of user
module.exports.createSession = function(req,res){
   
   return res.redirect('/');

};