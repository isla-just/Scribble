import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

const ClassList=()=>{
    const [data, setData]=useState([]);
    const [data2, setData2]=useState([]);

    useEffect(()=>{
        var requestOptions={
            method:'GET',
        };

        async function getData1(){
            const response=await fetch("http://localhost:8000/api/class", requestOptions);
            const result = await response.json();
            setData(result);
        }

        getData1();

        async function getData2(){
            const response=await fetch("http://localhost:8000/api/teacher", requestOptions);
            const result = await response.json();
            setData2(result);
        }

        getData2();

    },[]);//use effect

    var subject=[];
    var teacher=[];
    var day=[];
    var period=[];
    var classNo=[];
    var meetLink=[];

    var undefinedData=[];

    for(var j=0; j<data.length; j++){

        while(data[j]===undefined){
            undefinedData.push(data[j]);
            console.log("api not yet loaded")
        }

            if(data!==undefined && data!== null){

                subject.push(data[j].subject);
        
            }else{
                console.log("api not loaded");

            }//if else
    }//j

    for(var j=0; j<data2.length; j++){

        while(data2[j]===undefined){
            undefinedData.push(data2[j]);
            console.log("api not yet loaded")
        }

            if(data2!==undefined && data2!== null){

                teacher.push(data2[j].name);
        
            }else{
                console.log("api not loaded");

            }//if else
    }//j



    console.log(data);
    console.log(data2);

    return(
        <div className="classes">
        {/* {data.map(class=>(
             */}
        <h5 className="schedule">Upcoming classes</h5>
              <div className="titles" style={{marginLeft: '5%'}}>Subject</div>
              <div className="titles">Teacher</div>
              <div className="titles">Day</div>
              <div className="titles">Period</div>
              <div className="titles">Class Number</div>
              <div className="titles">Meet link</div>

              <div className="appointments">

              <Link to="/class"> <div className="appointment active-appointment">

                  <div className="labels1">{subject[0]}</div>
                  <div className="labels2">{teacher[0]}</div>
                  <div className="labels3">9 July 2021</div>
                  <div className="labels4">15:00</div>
                  <div className="labels5">A20</div>
              
              </div></Link>

              <div className="appointment">
                  <div className="labels1">Mathematics</div>
                  <div className="labels2">Mr Jones</div>
                  <div className="labels3">9 July 2021</div>
                  <div className="labels4">15:00</div>
                  <div className="labels5">A20</div>
               
              </div>

          

                            
          </div>
          </div>
    );
}//classlist

export default ClassList