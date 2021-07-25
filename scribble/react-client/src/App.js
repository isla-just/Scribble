import React, {useState, useEffect} from 'react';
import Login from "./components/Login";

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
      <Login/>

    </div>
  );
}

export default App;
