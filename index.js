const express = require('express');
const http = require('http');

const port=8000;


const app = express();


app.listen(port, function(err){
    //interpolation
    if(err)
    {
        console.log('Error',err);
        console.log(`error in running the server:${err}`);
       
    }
    console.log(`Server is running the server:${port}`);

});