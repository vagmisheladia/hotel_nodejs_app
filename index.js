const express = require('express');
const app = express(); 
const http = require('http');

var data = {
    id : 1,
    name : 'vagmi'
}

app.get('/',(req,res)=>{
    res.send(data);
});

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
