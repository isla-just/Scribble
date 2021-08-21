import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

const Edit=()=>{

    var undefinedData=[];

    const [data, setData]=useState(null);

            //getting the 2 parameters from the url 
const queryString=window.location.search;
const URLparams=new URLSearchParams(queryString);

const classid=URLparams.get('id');
const usertype=URLparams.get('usertype');

console.log(usertype);


useEffect(()=>{
    var requestOptions={
        method:'GET',
    };

    async function getData1(){
        const response=await fetch("http://localhost:8000/api/class?class="+classid, requestOptions);
        const result = await response.json();
        setData(result.data);
    }

    getData1();


},[]);//use effect


var subject="";
var teacher="";
var slot="";
var periods=[];
var days=[];
var message="";

var group="";
var classroom="";
var meetLink="";
var peers=[];

    while(data===undefined){
        undefinedData.push(data);
        console.log("api not yet loaded")
    }  
            console.log(undefinedData);
            
            if(data!== undefined&&data!==null){
                subject=data.details.subject;
                teacher=data.teacher;
                group=data.details.group;
                classroom=data.details.classroom;
                meetLink=data.details.link;
                slot=data.details.slot;
                message=data.details.message;

              for(var i=0;i<data.period[0].length;i++){
                  periods.push(data.period.period);
              }

              for(var i=0;i<data.learners.length;i++){
                peers.push(data.learners[i]);
            }
  
            }else{
                console.log("api not loaded");
    
            }//if else

   console.log(peers);
   console.log(periods);

    return(
        <div className="container">
        <div className="logo"></div>
      <input className="search" placeholder="Looking for someone?"></input>
      <div className="profile"></div>

      <div className="half1">
      <h1 className="bigHeader">{subject}</h1>
          <h3 className="teacher">- {teacher}</h3>

<div className="row1">

          <div className="classDetails2">
              <h3 className="card-header">Class details</h3>

              <p className="labelInput">Class name:</p>

                <input className="inputField1" value={subject}></input>

                  <p className="labelInput">Group number</p>
                  <input className="inputField1" value={group}></input>

                  <p className="labelInput">Classroom:</p>
                  <input className="inputField1" value={classroom}></input>

                  <p className="labelInput">Slot:</p>
                  <input className="inputField1" value={slot}></input>

                  <p className="labelInput">Link:</p>
                  <input className="inputField1" value={meetLink}></input>
                 
                 <button className="changes">Make changes</button>
  
          </div>
          <div className="teacherNote2">
          <h3 className="card-header">Add a note to your class</h3>
          <textarea className="announcement2" placeholder={message}></textarea>
          <button className="postmessage">Post message</button>
          <div className="illustration2" style={{marginTop:'100px'}}></div>

          </div>
          {/* //teachernote */}
</div>  
{/* row 1 */}
      </div>
      {/* half1 */}
          
        <div className="half2">
            <h2 className="card-header" style={{fontWeight:'700'}}>Learners</h2>
            <div className="peer-card">

                <div>
                    <h3 className="studentName">{peers[0]}</h3>

                    <div className="line"></div>
                </div>

                <div>
                    <h3 className="studentName">{peers[1]}</h3>

                    <div className="line"></div>
                </div>


            </div>
        </div>

        </div>
    );
}
export default Edit