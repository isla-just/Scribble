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

//capturing form data through parsing it into a json format
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//getting the data file
var data=require("./data.js");

//adding middleware
app.use(express.static('public'));
//middleware to change name param from url to lowercase

// //require the UTHENTICATION JS FILE to
// var authenticator=require('./authenticator');
// //use the autghenticator middleware
// app.use(authenticator);

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

    app.get('/api/classes/', function (request, response){
        response.json(data.classes);
        });

    //getting all of the learners
    //works
app.get('/api/learners/', function (request, response){
    response.json(data.learners);
    });

    var teacherClasses=[];

    //get ll the classes taught by mr hunt http://localhost:8000/api/teachers/Mr%20Hunt

app.get('/api/teachers/:id', function(req, res){
    var teacherid = null;

    for (var i=0;i<data.teachers.length; i++){
      
        
        if(data.teachers[i].id == req.params.id){

            teacherid = data.teachers[i].classes;
            for(var j=0; j < teacherid.length;j++){
                teacherClasses.push(data.classes[data.teachers[i].classes[j]-1]);
                
               
            };
            res.json(teacherClasses);
        };

    };
    if(teacherid === null){
        res.status(404).json("No teacher with name:'" + req.params.id + "' found.")
    };

    teacherClasses=[];

});

//     //http://localhost:8000/api/teachers/5
// app.get('/api/teachers/:id', function(request, response){
//     var id=request.params.id;
//     var teacherID=null;
//     var teacherData=[];
    
//     for(var i=0;i<data.teachers.length;i++){
//         if(data.teachers[i].id==parseInt(id)){
//             teacherID=data.teachers[i].classes;

//             for(var j=0; j<teacherID.length;j++){
//                 teacherData.push(data.classes[data.teachers[i].classes[j]-1])
//                 console.log(teacherData);
//             }
//             response.json(teacherData);
//         }else{
//             response.status(404).json("user id not found");
//         }
//     }
//     teacherData=[];
// });//function

var learnerClasses=[];

//getting all of the classes that a learner takes - displayed once loged in on classList
//http://localhost:8000/api/learners/1

app.get('/api/learners/:id', function(req, res){
    var learnerid = null;

    for (var i=0;i<data.learners.length; i++){

        if(data.learners[i].id == req.params.id){
           
            console.log(data.learners[i].id);

            learnerid = data.learners[i].classes;
            for(var j=0; j < learnerid.length;j++){
                learnerClasses.push(data.classes[data.learners[i].classes[j]-1]);

            };
            res.json(learnerClasses);
        };

    };
    // if(learnerid === null){
    //     res.status(404).json("No learner with name:'" + req.params.id + "' found.")
    // };

    learnerClasses=[];

});

//getting the learner according to name

app.get('/api/learners/:name', function(req, res){
    var learnerid = null;

    for (var i=0;i<data.learners.length; i++){
      
        
        if(data.learners[i].name === req.params.name){

            learnerid = data.learners[i].classes;
            for(var j=0; j < learnerid.length;j++){
                learnerClasses.push(data.classes[data.learners[i].classes[j]-1]);
                
               
            };
            res.json(learnerClasses);
        };

    };
    if(learnerid === null){
        res.status(404).json("No learner with name:'" + req.params.name + "' found.")
    };

    learnerClasses=[];

});

    // //http://localhost:8000/api/students/5
    // app.get('/api/learner/:id', function(request, response){
    //     var id=request.params.id;
    //     var learnerID=null;
    //     var learnerData=[];
        
    //     for(var i=0;i<data.learners.length;i++){
    //         if(data.learners[i].id==parseInt(id)){
    //             learnerID=data.learners[i].classes;
    
    //             for(var j=0; j<learnerID.length;j++){
    //                 learnerData.push(data.classes[data.learners[i].classes[j]-1])
    //                 console.log(learnerData);

    //                 response.json(learnerData);
    //                 console.log(learnerData);
    //             }

    //         }else{
    //             response.json("error");
    //         }
    //     }
        
    //   //learnerData=[];
    // });

    //post
    //show in postman - additional route
app.post('/api/teachers', function(request, response){
    //generate new id. length of the array plus one
    var id=data.teachers.length +1;
    var name=request.query.name;
    var email=request.query.email;

    //check if both queries are added 
    if(name!="" && email!=""){
        //add teacher to database
        data.teachers.push({id:id, name:name, email:email});
        response.json("new teacher added with id: "+id);
    }else{//respond with error
        response.status(406).json("Error while posting teacher");
    }
});

// app.get('/api/teacher', function(request, response){

//     //setting limits
//     if(request.query.limit >= 0){
//         response.json(data.teachers.slice(0, request.query.limit));
    
//     } else{
//         response.json(data.teachers);
//     }
// });

//http://localhost:8000/api/class?class=3
//getting all of the details of a single class

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
//getting all the possible users

if(classParameter !== ""){
    for(var i=0; i < data.classes.length; i++){
        if(data.classes[i].id === classParameter){

            var concetenate={"success":true, "code":200, "data":{"details":data.classes[i], "teacher":teachers, "learners":learners,"period":period}}

            res.json(concetenate);

            // classID=classParameter;
            // console.log(classID);
        }//if else
    };//for
    teachers=[];
    learners=[];
    period=[];
}else{
    res.status(404).json("cannot find any classes with supplied id ");
}
    
});//function


//Authentication
//http://localhost:8000/api/user/hunt@highschool.com/1234
app.get("/api/user/:email/:password", function(request, response){
    var userid=null;

    //checking the teachers object
    for(var i=0;i<data.teachers.length;i++){
        if(data.teachers[i].email===request.params.email && data.teachers[i].password===request.params.password){
            userid=data.teachers[i].id;
            response.json({"userid": userid, "email":data.teachers[i].email, "password":data.teachers[i].password, "userType":"teacher"});
        }
    }

        //checking the learners object
        for(var i=0;i<data.learners.length;i++){
            if(data.learners[i].email===request.params.email && data.learners[i].password===request.params.password){
                userid=data.learners[i].id;
                response.json({"userid": userid, "email":data.learners[i].email, "password":data.learners[i].password, "userType":"learner"});
            }
        }

        //if nothing is correctly
    if(userid===null){
        response.status(404).json("sorry your email or password is incorrect");
    }
});

//route handling login info for both students and teachers
app.get("/api/users/", function(request, response){

    var allUsers={"success":true, "code":200, "data":{"teachers":data.teachers, "learners":data.learners}}
    response.json(allUsers);
});

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
// updating information in the api

// http://localhost:8000/api/class/3
app.put('/api/class/:id', function(request, response){
    var id=request.params.id; //get id param from url

    //get values from query parameters
    var subject=request.body.subject;
    var group=request.body.group;
    var classroom=request.body.classroom;
    var slot=request.body.slot;
    var link=request.body.link;

    var idIndex=null;
    //loop through teachers data to find the exercise index
    for(var i=0;i<data.classes.length;i++){
        if(data.classes[i].id===parseInt(id)){
        idIndex=i;//set found index
    }//if
    }//for

    if(idIndex==null){//if no exercise found return 404
        response.status(404).json("no class with id "+id+" found");
    }else if(idIndex != null){

        if (subject != "") {
            data.classes[idIndex].subject=subject;
        }
        
        if (group != "") {
            data.classes[idIndex].group=group;
        }

        if (classroom != "") {
            data.classes[idIndex].classroom=classroom;
        }
        
        if (slot != "") {
            data.classes[idIndex].slot=slot;
        }
                
        if (link != "") {
            data.classes[idIndex].link=link;
        }

        response.json("class with id "+id+"updated");
    }else{
        response.json("there is a problem");
    }

})//function

// http://localhost:8000/api/class/3
app.put('/api/message/:id', function(request, response){
    var id=request.params.id; //get id param from url

    //get values from query parameters
    var message=request.body.message;

    var idIndex=null;
    //loop through teachers data to find the exercise index
    for(var i=0;i<data.classes.length;i++){
        if(data.classes[i].id===parseInt(id)){
        idIndex=i;//set found index
    }//if
    }//for

    if(idIndex==null){//if no exercise found return 404
        response.status(404).json("no class with id "+id+" found");
    }else if(idIndex != null){

        if (message != "") {
            data.classes[idIndex].message=message;
        }

        response.json("class with id "+id+"updated");
    }else{
        response.json("there is a problem");
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