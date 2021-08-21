import {Link} from 'react-router-dom';
import ClassList from './ClassList'
import React, {useState, useEffect} from 'react';

const Home=()=>{

    //getting the 2 parameters from the url 
const queryString=window.location.search;
const URLparams=new URLSearchParams(queryString);

const userid=URLparams.get('id');
const usertype=URLparams.get('userType');

console.log(usertype);

console.log(userid)

    const [data, setData]=useState([]);

    useEffect(()=>{
        var requestOptions={
            method:'GET',
        };

        async function getData1(){

            //checking usertype
            if(usertype==="learner"){
                const response=await fetch("http://localhost:8000/api/learners", requestOptions);
                const result = await response.json();
    
                //write if statement for user type
                setData(result);
            }else{
                const response=await fetch("http://localhost:8000/api/teachers", requestOptions);
                const result = await response.json();
    
                //write if statement for user type
                setData(result);
            }
        }

        getData1();

    },[]);//use effect

    //storing variables so nothing is undefined
    var undefinedData=[];
    var studentName=[];
    var studentID=[];
    var studentEmail=[];
    var studentPassword=[];

    var teacherData=[];
    var studentData=[];

    for(var j=0; j<data.length; j++){
        if(data!== undefined&&data!==null){
            studentName.push(data[j].name);
            studentID.push(data[j].id);
            studentEmail.push(data[j].email);
            studentPassword.push(data[j].password);
        }else{
            console.log("api not loaded");

        }//if else

    }//j

   console.log(studentData);
   console.log(studentName);

    return(
        <div className="container">
            <div className="logo"></div>
          <input className="search" placeholder="Looking for someone?"></input>
          <div className="profile"></div>

          <div className="half1">
              <div className="card">
                  <h1 className="header" style={{marginTop:'105px', marginLeft:'50px', fontWeight:500, width:'160px'}}>Welcome <br></br>{studentName[userid-1]}!</h1>
                  <div className="illustration"></div>
              </div>
              <div className="card2"></div>
              
           <ClassList/>
          </div>
          <div className="half2">
              <div className="block">
                  <h3 className='block-details'>Your details</h3>
                     <div className='smol-half'>
                         <p>Fullname:<br></br><br></br>user ID:<br></br><br></br>Email:<br></br><br></br>Password:</p>
                         
                     </div>
                     <div className='smol-half' style={{marginLeft:'-40px', width:"200px"}}>
                     <p style={{fontWeight:600, textAlign:'right'}}>{studentName[userid-1]}<br></br><br></br>{studentID[userid-1]}<br></br><br></br>{studentEmail[userid-1]}<br></br><br></br>{studentPassword[userid-1]}</p>
                     </div>
        
              </div>
              <div className='details'>
             <h2 className="student-details">{studentName[userid-1]}</h2>
             <p style={{color:'white',textAlign:'center',marginTop:'5px'}}>{usertype}</p>

              </div>
               <div className="circle"></div>
               <Link to="/login">
               <div className='logout'>Log out</div>
               </Link>
          </div>
        </div>
    );
}
export default Home