import React, {useState, useEffect} from 'react';
import Login from "./components/Login";
import Home from "./components/Home";
import Class from "./components/Class";
import Edit from "./components/Edit";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  const [data, setData]=useState();

  useEffect(()=>{
    var requestOptions ={// sets the request info
      method:"GET",
    };

    async function getData(){
      const response=await fetch ('http://localhost:8000/api/students', requestOptions);
      const data =await response.json();
      setData(data);
    }

    getData();

  },[]);// end of use effect

  console.log(data);

  return (
    
    <div className="App">
      <Router>
          <Route path="/login" exact component={Login}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/classes" exact component={Class}/>
          <Route path="/edit" exact component={Edit}/>
      </Router>

    </div>
  );
}

export default App;
