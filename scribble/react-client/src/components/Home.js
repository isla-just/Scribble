import {Link} from 'react-router-dom';
import ClassList from './ClassList'



const Home=()=>{
    return(
        <div className="container">
            <div className="logo"></div>
          <input className="search" placeholder="Looking for someone?"></input>
          <div className="profile"></div>

          <div className="half1">
              <div className="card">
                  <h1 className="header" style={{marginTop:'105px', marginLeft:'50px', fontWeight:500}}>Welcome <br></br>John!</h1>
                  <div className="illustration"></div>
              </div>
              <div className="card2"></div>
              
           <ClassList/>
          </div>
          <div className="half2">
              <div className="block">
                  <h3 className='block-details'>Your details</h3>
                     <div className='smol-half'>
                         <p>Name:<br></br><br></br>Surname:<br></br><br></br>Grade:<br></br><br></br>Username:</p>
                         
                     </div>
                     <div className='smol-half' style={{marginLeft:'-5px'}}>
                     <p style={{fontWeight:600, textAlign:'right'}}>John<br></br><br></br>Smith<br></br><br></br>grade 9<br></br><br></br>JohnLovesDogs</p>
                     </div>
        
              </div>
              <div className='details'>
             <h2 className="student-details">John Smith</h2>
             <p style={{color:'white',textAlign:'center',marginTop:'5px'}}>Grade 9 learner</p>

              </div>
               <div className="circle"></div>
            <div className='logout'>Log out</div>
          </div>
        </div>
    );
}
export default Home