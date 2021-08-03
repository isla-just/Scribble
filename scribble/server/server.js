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

//middleware to change name param from url to lowercase

app.param('name', function(request, response, next){
    request.lowerName=request.params.name.toLowerCase();
    next();
});

//beginning routing
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

    
//getting all of the classes
//works
app.get('/api/classes/', function (request, response){
    response.json(data.classes);
    });

    //getting all of the teachers
    //works
app.get('/api/teachers/', function (request, response){
    response.json(data.teachers);
    });

    //getting all of the students
    //works
app.get('/api/learners/', function (request, response){
    response.json(data.learners);
    });


    //finding a specific class
    //doesnt work
app.get('/api/class', function(request, response){

    var roomParameter = +request.query.classes;

    if(roomParameter !== ""){
        for(var i=0;i<data.classes.length;i++){
            if(data.classes[i].id===roomParameter){
                response.json(data.classes[i]);
            }
        }//for
    }//if

    else{
        response.json(data.classes);
    }
});

//going to the api student route
app.get('/api/learners', function(request, response){

    //setting limits
    if(request.query.limit >= 0){
        response.json(data.students.slice(0, request.query.limit));
    
    } else{
        response.json(data.students);
    }
});

//name is thge placeholder
app.get('/api/teachers/:name', function(request, response){
var teacher=null;
var lowerName=request.params.name.toLowerCase();

for(var i=0; i< data.teachers.length;i++){
    if(data.teachers[i].name === lowerName){
        teacher= data.teachers[i];
        response.json(teacher);
    }
}

if(teacher== null){
    response.status(404).json("hmm we can seem to find a teacher named "+lowerName);
}
});

//updating information in the api
app.put('/api/teachers/:id', function(request, response){
    var id=request.params.id; //get id param from url

    //get values from query parameters
    var name=request.query.name;
    var email=request.query.email;

    var emailIndex=null;
    //loop through teachers data to find the exercise index
    for(var i=0;i<data.teachers.length;i++){
        if(data.teachers[i].id===parseInt(id)){
        emailIndex=i;//set found index
    }//if
    }//for

    if(emailIndex==null){//if no exercise found return 404
        response.status(404).json("no exercise with id "+id+" found");
    }else{
        if(name!=""){
            data.teachers[emailIndex].name=name;

        }
        response.json("Exercise with id "+id+"updated");
    }
})//function

//deleting a teacher
app.delete('/api/teachers/:id', function(request, response){
    var id=request.params.id;
    var teacherIndex=null;

    //loop through
    for(var i=0;i<data.teachers.length;i++){
        if(data.teachers[i].id===parseInt(id)){
            teacherIndex=i;
                }
    }

    if(teacherIndex==null){
        response.status(404).json("No teacher with id "+id+" found");
    }else{
        data.teachers.splice(teacherIndex,1);
        response.json("Teacher with id "+id+"has been deleted");
    }
})

//listen for server on port 8000
app.listen(8000, function(){
    console.log("listening");
    });