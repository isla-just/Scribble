//require express dependency
var express = require('express');

//setup the express server as app
var app= express();

//adding middleware
app.use(express.static('public'));

//creating a logger to handle requests
var logger =require('./logger');
app.use(logger);

//setting up cors - where do you put this
//allowing communication between the two hosts
var cors=require('cors');
app.use(cors({"origin":"http://localhost:3000"}));

//getting the data file
var data=require("./data.js");

//setting up another route
app.get('/api/classrooms/', function (request, response){
    response.json(data.classrooms);
    });

    //finding a specific room
app.get('/api/classroom', function(request, response){

    var roomParameter = +request.query.classroom;

    if(roomParameter !== ""){
        for(var i=0;i<data.classrooms.length;i++){
            if(data.classrooms[i].id===roomParameter){
                response.json(data.classrooms[i]);
            }
        }//for
    }//if

    else{
        response.json(data.classrooms);
    }
});

//basic routing
//responding with a static html file
app.get('/', function(request, response){

//use sendfile() to respond with a file
//dirname is the root of server

response.sendFile(__dirname+'/public/index.html');

    // response.writeHead(200, 'ok', {'Content-Type':'text.html'});
    // response.write('<h1>Hello world</h1>');
    // response.end();
});

//redirecting back to the home route
app.get('/home', function(request, response){
    response.redirect(301, '/');
    });

//going to the api student route
app.get('/api/students', function(request, response){

    //setting limits
    if(request.query.limit >= 0){
        response.json(data.students.slice(0, request.query.limit));
    
    } else{
        response.json(data.students);
    }
});

//name is thge placeholder
app.get('/api/subjects/:name', function(request, response){
var subject=null;
var lowerName=request.params.name.toLowerCase();

for(var i=0; i< data.subjects.length;i++){
    if(data.subjects[i].name === lowerName){
        subject= date.subjects[i];
        response.json(subject);
    }
}

if(subject== null){
    response.status(404).json("hmm we can seem to find a class named "+lowerName);
}
});

//listen for server on port 8000
app.listen(8000, function(){
    console.log("listening");
    });