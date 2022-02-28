

module.exports.destroySession = function(req,res){
    req.logout(); //provided by passport
    return res.redirect('/');
}