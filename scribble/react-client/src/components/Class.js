import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

const Class=()=>{

    var undefinedData=[];

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
        console.log(data);

    var subject="";
    var teacher="";
    var periods=[];
    var days=[];

    var group="";
    var classroom="";
    var meetLink="";
    var peers=[];
    var message="";

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
                    message=data.details.message;
                    periods.push(data.period);

                  for(var i=0;i<data.learners.length;i++){
                    peers.push(data.learners[i]);
                }

                for(var i=0;i<data.period.length;i++){
                    periods.push(data.period[i][i]);
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
          <h1 className="bigHeader" style={{marginTop:'120px', fontSize:'60px'}}>{subject}</h1>
          <h3 className="teacher" style={{fontSize:'30px'}}>- {teacher}</h3>


<div className="row1">

          <div className="classDetails">
              <h3 className="card-header">Class details</h3>
              <div className='smol-half'style={{marginLeft:'20px',width:'80px'}} >
                         <p>Class:<br></br><br></br>Group:<br></br><br></br>Classroom:<br></br><br></br>Period:</p>
                         
                     </div>
                     <div className='smol-half' style={{marginRight:'20px', width:'140px'}}>
                     <p style={{fontWeight:600, textAlign:'right', width:'150px'}}>{subject}<br></br><br></br>{group}<br></br><br></br>{classroom}<br></br><br></br>Period 3</p>
                     </div>

                     <Link to={{ pathname: `${meetLink}`}} target="_blank" ><div className="googleMeet">Google meet link</div> </Link>
        

          </div>
          <div className="teacherNote">
          <h3 className="card-header">A note from your teacher</h3>
          <h4 className="announcement">{message}</h4>
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
            {peers.map((classList) => (
                <div style={{width:'100%'}}>
              
                    <h3 className="studentName">{classList}</h3>
                    <div className="line"></div>

                    </div>
            ))};


            </div>

        </div>

        </div>
    );
}
export default Class