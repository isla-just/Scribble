import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

const ClassList=()=>{
    const [data, setData]=useState([]);

    useEffect(()=>{
        var requestOptions={
            method:'GET',
        };

        async function getData1(){
            const response=await fetch("http://localhost:8000/api/classes/", requestOptions);
            const result = await response.json();
            setData(result);
        }

        getData1();

    },[]);//use effect

    var classID=[];
    var slot=[];
    var subject=[];
    var group=[];
    var classroom=[];
    var meetLink=[];

    var undefinedData=[];

    for(var j=0; j<data.length; j++){

        while(data[j]===undefined){
            undefinedData.push(data[j]);
            console.log("api not yet loaded")
        }

    }//j

    console.log(data);

    return(
        <div className="classes">
        {/* {data.map(class=>(
             */}
        <h5 className="schedule">Upcoming classes</h5>
              <div className="titles" style={{marginLeft: '5%'}}>ID</div>
              <div className="titles" style={{marginLeft:"-40px"}}>Slot</div>
              <div className="titles" style={{marginLeft:"-40px"}}>Subject</div>
              <div className="titles" style={{marginLeft:"70px"}}>Group</div>
              <div className="titles" style={{marginLeft:"-30px"}}>Classroom</div>
              <div className="titles">Meet link</div>

              <div className="appointments">

              {data.map((classList) => (
            <Link to="/class"> <div className="appointment">

                    <div className="labels1">{classList.id}</div>
                    <div className="labels2" style={{marginLeft:"-30px"}}>{classList.slot}</div>
                    <div className="labels3" style={{marginLeft:"-30px", width:"200px"}}>{classList.subject}</div>
                    <div className="labels4" style={{marginLeft:"20px"}}>{classList.group}</div>
                    <div className="labels5" style={{marginLeft:"-20px"}}>{classList.classroom}</div>
                    <Link to={`${classList.link}`}><div className="labels6">Google meet link</div></Link>
                
                </div></Link>
                ))}

          

                            
          </div>
          </div>
    );
}//classlist

export default ClassList