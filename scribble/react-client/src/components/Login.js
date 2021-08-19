import {Link, useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import $ from 'jquery';

const Login=()=>{



    $(()=>{ 
        $(".userSelect2").on("click", function(){
         $(this).addClass("activeUser");
         $(".userSelect1").removeClass("activeUser");

        });

        $(".userSelect1").on("click", function(){
            $(this).addClass("activeUser");
            $(".userSelect2").removeClass("activeUser");
        
           });    
    });
    
    const [data, setData] = useState({});
    const history = useHistory();
    var getEmail="";
    var getPword="";


    // useEffect(()=>{
    //     var requestOptions = {
    //     method: 'GET',
    //     };

    //     async function getData() {
    //     //http://localhost:8000/api/user/hunt@highschool.com/1234
    //     const response = await fetch("http://localhost:8000/api/"+$(".activeUser").attr("value")+'/', requestOptions);
    //     const result = await response.json();
    //     setData(result);
    //     };

    //     getData();
    // }, [$("activeUser").attr("value")]);

    // console.log(data);

    const onEmailChange = event => {
        setData({email: event.target.value, password: data.password});
        // getEmail.push({email: event.target.value, password: data.password});
        // console.log({email: event.target.value, password: data.password});
        // getEmail={email: event.target.value};
    };

    const onPasswordChange = event => {
        setData({email: data.email, password: event.target.value});
        // getPword.push({email: data.email, password: event.target.value})
        // console.log({email: data.email, password: event.target.value});
        // getPword={password: event.target.value}
    };
    console.log(getPword);
    console.log(getEmail);

    const onSubmit = event => {  
        event.preventDefault();

//how do I check if im getting a 404 or not
        const url = 'http://localhost:8000/api/user/'+data.email+'/'+data.password;
        const requestOptions = {
            method : 'GET', 
        };
        
        fetch(url,requestOptions);

        console.log(url);
        console.log(event);
      
    };


    return(
        <div className="scribble-container">
            <div className="input-container">
                <h1 className="main-header">SIGN IN</h1>
                <p className="body-text">Welcome back to your student portal!</p>
                <form >

                    <input className="details1" type="text" placeholder="Your email" onChange={onEmailChange} name="email"></input>
                    <input className="details1" type="password" placeholder="Your password" onChange={onPasswordChange} name="password"></input>
                    <p className="forget">forgot your password?</p>
                    <div className="userSelect1 activeUser" value="learners" style={{marginLeft:'60px'}}>I am a student</div>
                    <div className="userSelect2" value="teachers">I am a teacher</div>
                    
                   <button className="btnSubmit" type="submit" onClick={onSubmit} style={{marginTop:"30px"}}>Log in</button>
                </form>
            </div>
        </div>
    );
}
export default Login