const express = require('express');
const http = require('http');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport= require('passport');
const passportLocal = require('./config/passport-local-strategy');

const port=8000;

const db = require('./config/mongoose');
const exp = require('constants');

const app = express();

app.use(express.static('./assets'));
app.use(express.urlencoded());//
app.use(expressLayouts);
app.use(cookieParser());


// use express router MW
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine', 'ejs');
app.set('views','./views');
//extract style and scripts from subpages into the layout


app.use(session({
    name: 'Codeial',
    secret: 'blahsomething',
    saveUninitialized:false, // request not initialised -- user not logged in
    resave:false,//do not want to save data again n again
    cookie:{
        maxAge: (1000 * 60*100),
    }

}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',require('./routes'));




app.listen(port, function(err){
    //interpolation
    if(err)
    {
        // console.log('Error',err);
        console.log(`error in running the server:${err}`);
       
    }
    console.log(`Server is running the server:${port}`);

});