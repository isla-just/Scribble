import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

const Class=()=>{

    const [data, setData]=useState([]);

    useEffect(()=>{
        var requestOptions={
            method:'GET',
        };

        async function getData1(){
            const response=await fetch("http://localhost:8000/api/class?class=3", requestOptions);
            const result = await response.json();
            setData(result);
        }

        getData1();

    },[]);//use effect

    var subject=[];
    var teacher=[];
    var period=[];
    var group=[];
    var classroom=[];
    var meetLink=[];
    var peers=[];

    var undefinedData=[];
    while(data===undefined){
        undefinedData.push(data);
        console.log("api not yet loaded")

            }  
            
            if(data!== undefined&&data!==null){
                // subject.push(data.data.details.subject);
                // teacher.push(data.data.teacher);
                // period.push(data.data.period.day);
                // group.push(data.data.details.group);
                // classroom.push(data.data.details.classroom);
  
            }else{
                console.log("api not loaded");
    
            }//if else

  

    console.log(data);
    console.log(period)

    return(
        <div className="container">
        <div className="logo"></div>
      <input className="search" placeholder="Looking for someone?"></input>
      <div className="profile"></div>

      <div className="half1">
          <h1 className="bigHeader">{subject}</h1>
          <h3 className="teacher">- {teacher}</h3>
          <div className="checklistBlock"></div>
          <h3 className="blocking">Period 3: 09:00-10:00</h3>

<div className="row1">

          <div className="classDetails">
              <h3 className="card-header">Class details</h3>
              <div className='smol-half'style={{marginLeft:'20px',width:'80px'}} >
                         <p>Class:<br></br><br></br>Group:<br></br><br></br>Classroom:<br></br><br></br>Period:</p>
                         
                     </div>
                     <div className='smol-half' style={{marginRight:'20px', width:'140px'}}>
                     <p style={{fontWeight:600, textAlign:'right', width:'150px'}}>{subject}<br></br><br></br>{group}<br></br><br></br>{classroom}<br></br><br></br>Period 3</p>
                     </div>

            <a href="meet.google.com/hnz-qcte-qhj"><div className="googleMeet">Google meet link</div></a>
        

          </div>
          <div className="teacherNote">
          <h3 className="card-header">A note from your teacher</h3>
          <h4 className="announcement">Hi class, please remember your upcoming presentation on the 20th of August!</h4>
          <div className="illustration2"></div>
          </div>
          {/* //teachernote */}
</div>
{/* row 1 */}
      </div>
      {/* half1 */}
          
        <div className="half2">
            <h2 className="card-header" style={{fontWeight:'700'}}>Your peers</h2>
            <div className="peer-card">
                <h3 className="studentName">Elsie Nunez</h3>
                <h4 className="groupNo">- Group 4</h4>

                <div className="line"></div>

                <h3 className="studentName">Dean Turner</h3>
                <h4 className="groupNo">- Group 2</h4>

                <div className="line"></div>

                <h3 className="studentName">Valentine Annable</h3>
                <h4 className="groupNo">- Group 4</h4>

                <div className="line"></div>

                <h3 className="studentName">Victor Bowman</h3>
                <h4 className="groupNo">- Group 1</h4>

                <div className="line"></div>

                <h3 className="studentName">John Simons</h3>
                <h4 className="groupNo">- Group 4</h4>

                <div className="line"></div>
            </div>
        </div>

        </div>
    );
}
export default Class