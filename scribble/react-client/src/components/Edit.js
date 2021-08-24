import {Link, useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Popup from './Popup';
import $ from 'jquery';


const Edit=()=>{

    $(()=>{ 
     $(".blur").hide();
    });

    var undefinedData=[];
    const history = useHistory();

    const [data, setData]=useState(null);

            //getting the 2 parameters from the url 
const queryString=window.location.search;
const URLparams=new URLSearchParams(queryString);

const classid=URLparams.get('id');
const usertype=URLparams.get('usertype');


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

              for(var i=0;i<data.period.length;i++){
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


  //handing the editing of a new task
  const [editClass, setEditClass]=useState({});

    //handing the editing of message
    const [editMessage, setEditMessage]=useState();

   //listening for input field changes
   const onSubjectChange = event => {
    setEditClass({subject: event.target.value, group: editClass.group, classroom: editClass.classroom, slot: editClass.slot, link: editClass.link});
    
    };

    const onGroupChange = event => {
    setEditClass({subject: editClass.subject, group: event.target.value, classroom: editClass.classroom, slot: editClass.slot, link: editClass.link});
    };

    const onClassroomChange = event => {
        setEditClass({subject: editClass.subject, group: editClass.group, classroom: event.target.value, slot: editClass.slot, link: editClass.link});
        };

    const onSlotChange = event => {
    setEditClass({subject: editClass.subject, group: editClass.group, classroom: editClass.classroom, slot: event.target.value, link: editClass.link});
    };

    const onLinkChange = event => {
    setEditClass({subject: editClass.subject, group: editClass.group, classroom: editClass.classroom, slot: editClass.slot, link: event.target.value});
    };

    const onMessageChange = event => {
        setEditMessage({message: event.target.value});
        };

     //update the button press
  const handleUpdate=(event)=>{

    event.preventDefault();

    const url="http://localhost:8000/api/class/"+classid;
    const requestOptions={
      method:"PUT",
      headers : {'Content-Type':'application/json'},
      body : JSON.stringify(editClass)
    }
    fetch(url,requestOptions);

    $(()=>{ 
        $(".blur").fadeIn(800);
        $(".close").on("click", function(){
            $(".blur").fadeOut(800);
            history.go(0);
        });
       });
  }

       //update the update of message
       const handleUpdate2=(event)=>{

        event.preventDefault();
    
        const url="http://localhost:8000/api/message/"+classid;
        const requestOptions={
          method:"PUT",
          headers : {'Content-Type':'application/json'},
          body : JSON.stringify(editMessage)
        }
        fetch(url,requestOptions);
        $(()=>{ 
            $(".blur").fadeIn(800);
            $(".close").on("click", function(){
                $(".blur").fadeOut(800);
                history.go(0);
            });
           });
      }

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

              <form onSubmit={handleUpdate} encType="application/x-www-form-urlencoded">

              <p className="labelInput">Class name:</p>

                <input className="inputField1" name="subject" onChange={onSubjectChange} defaultValue={subject}/>

                  <p className="labelInput">Group number</p>
                  <input className="inputField1" name="group" onChange={onGroupChange} defaultValue={group}/>

                  <p className="labelInput">Classroom:</p>
                  <input className="inputField1" name="classroom" onChange={onClassroomChange} defaultValue={classroom}/>

                  <p className="labelInput">Slot:</p>
                  <input className="inputField1" name="slot" onChange={onSlotChange} defaultValue={slot}/>

                  <p className="labelInput">Link:</p>
                  <input className="inputField1"  name="link" onChange={onLinkChange} defaultValue={meetLink}/>
                 
                 <input className="changes" type="submit" value="make changes"></input>
                 </form>
          </div>
          <div className="teacherNote2">
          <h3 className="card-header">Add a note to your class</h3>

          <form onSubmit={handleUpdate2} encType="application/x-www-form-urlencoded">
          <textarea className="announcement2" defaultValue={message} onChange={onMessageChange}></textarea>
          <input type="submit" className="postmessage" value="Post Message"></input>
          </form>

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
            {peers.map((classList) => (
                <div style={{width:'100%'}}>
              
                    <h3 className="studentName">{classList}</h3>
                    <div className="line"></div>

                    </div>
            ))};


            </div>
        </div>

        <div className="blur">
            <div className="card-popup">
                <div className="close"></div>
                <h1>The class has been updated</h1>
                <p>You can continue browsing <br></br>through your classes</p>
                <div className="illustration" style={{marginTop:'40px'}}></div>
            </div>
    </div>

        </div>
    );
}
export default Edit