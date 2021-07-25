import {Link} from 'react-router-dom';

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
              
              <div className="classes">
              <h5 className="schedule">Your enrollments</h5>
                    <div className="titles" style={{marginLeft: '5%'}}>Subject</div>
                    <div className="titles">Teacher</div>
                    <div className="titles">Day</div>
                    <div className="titles">Period</div>
                    <div className="titles">Class Number</div>
                    <div className="titles">Meet link</div>

                    <div className="appointments">

                    <div className="appointment">
                        <div className="labels1">Mathematics</div>
                        <div className="labels2">Mr Jones</div>
                        <div className="labels3">9 July 2021</div>
                        <div className="labels4">15:00</div>
                        <div className="labels5">A20</div>
                        <a href="https://meet.google.com/jmb-kwdg-jnn"><div className="labels6">Link</div></a>
                    </div>

                    <div className="appointment">
                        <div className="labels1">Mathematics</div>
                        <div className="labels2">Mr Jones</div>
                        <div className="labels3">9 July 2021</div>
                        <div className="labels4">15:00</div>
                        <div className="labels5">A20</div>
                        <a href="https://meet.google.com/jmb-kwdg-jnn"><div className="labels6">Link</div></a>
                    </div>

                    <div className="appointment">
                        <div className="labels1">Mathematics</div>
                        <div className="labels2">Mr Jones</div>
                        <div className="labels3">9 July 2021</div>
                        <div className="labels4">15:00</div>
                        <div className="labels5">A20</div>
                        <a href="https://meet.google.com/jmb-kwdg-jnn"><div className="labels6">Link</div></a>
                    </div>

                    <div className="appointment">
                        <div className="labels1">Mathematics</div>
                        <div className="labels2">Mr Jones</div>
                        <div className="labels3">9 July 2021</div>
                        <div className="labels4">15:00</div>
                        <div className="labels5">A20</div>
                        <a href="https://meet.google.com/jmb-kwdg-jnn"><div className="labels6">Link</div></a>
                    </div>

                    <div className="appointment">
                        <div className="labels1">Mathematics</div>
                        <div className="labels2">Mr Jones</div>
                        <div className="labels3">9 July 2021</div>
                        <div className="labels4">15:00</div>
                        <div className="labels5">A20</div>
                        <a href="https://meet.google.com/jmb-kwdg-jnn"><div className="labels6">Link</div></a>
                    </div>

                    <div className="appointment">
                        <div className="labels1">Mathematics</div>
                        <div className="labels2">Mr Jones</div>
                        <div className="labels3">9 July 2021</div>
                        <div className="labels4">15:00</div>
                        <div className="labels5">A20</div>
                        <a href="https://meet.google.com/jmb-kwdg-jnn"><div className="labels6">Link</div></a>
                    </div>

                         <div className="appointment">
                        <div className="labels1">Mathematics</div>
                        <div className="labels2">Mr Jones</div>
                        <div className="labels3">9 July 2021</div>
                        <div className="labels4">15:00</div>
                        <div className="labels5">A20</div>
                        <a href="https://meet.google.com/jmb-kwdg-jnn"><div className="labels6">Link</div></a>
                    </div>

                     <div className="appointment">
                        <div className="labels1">Mathematics</div>
                        <div className="labels2">Mr Jones</div>
                        <div className="labels3">9 July 2021</div>
                        <div className="labels4">15:00</div>
                        <div className="labels5">A20</div>
                        <a href="https://meet.google.com/jmb-kwdg-jnn"><div className="labels6">Link</div></a>
                    </div>          

                                  
                </div>
                </div>
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