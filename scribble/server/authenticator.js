//authentication js middleware

//getting the data file
// var data=require("./data.js");

// module.exports = function(request, response, next){
//     var passcodeTeacher=data.teachers.password;
//     var passcodeStudent=data.learners.password;

//     //sould be included in the request as a query parameter
//     if(request.query.passcodeTeacher===passcodeTeacher){
//         next();
//     }else if(request.query.passcodeStudent===passcodeStudent){
//         next();
//     }else{
//         //if it doesnt match the required password then respond with 401
//         response.send(401);
//     }
// }