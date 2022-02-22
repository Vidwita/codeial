module.exports.home = function(req,res){
    // return res.end('<h1>Express is up for codeial</h1>');

    console.log(req.cookies);
    res.cookie('user_id',25);
    res.cookie('something_blah','blah');
    return res.render('home',{
        title:"Home"
    });
}

//module.exports.actionName = fucntion(req,res){}
