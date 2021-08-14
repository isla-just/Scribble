//require express dependency
var express = require('express');

//setup the express server as app
var app= express();

//setting up cors - where do you put this
//allowing communication between the two hosts
var cors=require('cors');
app.use(cors({"origin":"http://localhost:3000"}));

//creating a logger to handle requests
var logger =require('./logger');
app.use(logger);

//getting the data file
var data=require("./data.js");

//adding middleware
app.use(express.static('public'));
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

        //globals
        var classID=0;
        var teachers=[];
        var learners=[];
        var period=[];

    
//getting all of the classes
//works

    //getting all of the teachers
    //works
app.get('/api/teachers/', function (request, response){
    response.json(data.teachers);
    });

    //getting all of the learners
    //works
app.get('/api/learners/', function (request, response){
    response.json(data.learners);
    });

    //post
// app.post('/api/teachers', function(request, response){
//     //generate new id. length of the array plus one
//     var id=data.teachers.length +1;
//     var name=request.query.name;
//     var email=request.query.email;

//     //check if both queries are added 
//     if(name!="" && email!=""){
//         //add teacher to database
//         data.teachers.push({id:id, name:name, email:email});
//         response.json("new teacher added with id: "+id);
//     }else{//respond with error
//         response.status(406).json("Error while posting teacher");
//     }
// });

app.get('/api/teacher', function(request, response){

    //setting limits
    if(request.query.limit >= 0){
        response.json(data.teachers.slice(0, request.query.limit));
    
    } else{
        response.json(data.teachers);
    }
});

app.get('/api/class', function(req, res){

    var classParameter= +req.query.class;

    if(classParameter !== ""){
        for(var i=0; i < data.classes.length; i++){
            if(data.classes[i].id === classParameter){
                // res.json(data.classes[i]);
                classID=classParameter;
                // console.log(classID);
            }//if else
        };//for
    }else{
        console.log("no id supplied")
    }

    //getting the teacher of the class baded on the matching id

    for(var i=0;i<data.teachers.length;i++){
        var teacherClasses = data.teachers[i].classes;
    
        // console.log(teacherClasses);
    
        for(var j=0;j<teacherClasses.length;j++){
            // console.log(teacherClasses[j]);
    
            if(teacherClasses[j]===classID){
                var indexPoint=i;
                 teachers.push(data.teachers[indexPoint].name);
            }
        }
    
        };

        // console.log(teachers);

        //getting the student of the class based on the matching id and classes array

        for(var i=0;i<data.learners.length;i++){
            var learnersClasses = data.learners[i].classes;
        
            for(var j=0;j<learnersClasses.length;j++){
        
                if(learnersClasses[j]===classID){
                    var indexPoint=i;
                    // console.log(data.learners[indexPoint].name);
                     learners.push(data.learners[indexPoint].name);
            }
            }
        
    };

    //getting the date and time of the given class

      var slotNum= data.classes[classID-1].slot;
    //   console.log(slotNum);

    for(var i=0;i<data.slots.length;i++){

        if(data.slots[i].slot===slotNum){
            period.push(data.slots[i].times);
        }
    
};

//writing the response

if(classParameter !== ""){
    for(var i=0; i < data.classes.length; i++){
        if(data.classes[i].id === classParameter){

            var concetenate=[data.classes[i], teachers, learners, period];

            res.json(concetenate);

            // classID=classParameter;
            // console.log(classID);
        }//if else
    };//for
}else{
    res.status(404).json("cannot find any classes with supplied id ");
}
    
});//function


//new api route
//callinging this api through the react frontend
//going to the api class route
// app.get('/api/class', function(request, response){

//     //setting limits
//     if(request.query.limit >= 0){
//         response.json(data.classes.slice(0, request.query.limit));
    
//     } else{
//         response.json("data.classes");
//     }
// });

//     //finding a specific class
//     //doesnt work
// app.get('/api/class', function(request, response){

//     var roomParameter = +request.query.classes;

//     if(roomParameter !== ""){
//         for(var i=0;i<data.classes.length;i++){
//             if(data.classes[i].id===roomParameter){
//                 response.json(data.classes[i]);
//             }
//         }//for
//     }//if

//     else{
//         response.json(data.classes);
//     }
// });

//put
//updating information in the api
// app.put('/api/teachers/:id', function(request, response){
//     var id=request.params.id; //get id param from url

//     //get values from query parameters
//     var name=request.query.name;
//     var email=request.query.email;

//     var emailIndex=null;
//     //loop through teachers data to find the exercise index
//     for(var i=0;i<data.teachers.length;i++){
//         if(data.teachers[i].id===parseInt(id)){
//         emailIndex=i;//set found index
//     }//if
//     }//for

//     if(emailIndex==null){//if no exercise found return 404
//         response.status(404).json("no exercise with id "+id+" found");
//     }else{
//         if(name!=""){
//             data.teachers[emailIndex].name=name;

//         }
//         response.json("Exercise with id "+id+"updated");
//     }
// })//function

//deleting a teacher
// app.delete('/api/teachers/:id', function(request, response){
//     var id=request.params.id;
//     var teacherIndex=null;

//     //loop through
//     for(var i=0;i<data.teachers.length;i++){
//         if(data.teachers[i].id===parseInt(id)){
//             teacherIndex=i;
//                 }
//     }

//     if(teacherIndex==null){
//         response.status(404).json("No teacher with id "+id+" found");
//     }else{
//         data.teachers.splice(teacherIndex,1);
//         response.json("Teacher with id "+id+"has been deleted");
//     }
// })

//name is thge placeholder
// app.get('/api/teachers/:name', function(request, response){
// var teacher=null;
// var lowerName=request.params.name.toLowerCase();

// for(var i=0; i< data.teachers.length;i++){
//     if(data.teachers[i].name === lowerName){
//         teacher= data.teachers[i];
//         response.json(teacher);
//     }
// }

// if(teacher== null){
//     response.status(404).json("hmm we can seem to find a teacher named "+lowerName);
// }
// });


//listen for server on port 8000
app.listen(8000, function(){
    console.log("listening");
    });