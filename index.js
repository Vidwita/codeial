const express = require('express');
const http = require('http');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');

const port=8000;

const db = require('./config/mongoose');
const exp = require('constants');

const app = express();

app.use(express.static('./assets'));
app.use(express.urlencoded());//
app.use(expressLayouts);
app.use(cookieParser());


// use express router MW
app.use('/',require('./routes'));
app.set('view engine', 'ejs');
app.set('views','./views');
//extract style and scripts from subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);




app.listen(port, function(err){
    //interpolation
    if(err)
    {
        // console.log('Error',err);
        console.log(`error in running the server:${err}`);
       
    }
    console.log(`Server is running the server:${port}`);

});