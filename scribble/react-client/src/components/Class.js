import {Link} from 'react-router-dom';

const Class=()=>{
    return(
        <div className="container">
        <div className="logo"></div>
      <input className="search" placeholder="Looking for someone?"></input>
      <div className="profile"></div>

      <div className="half1">
          <h1 className="bigHeader">Grade 10 History</h1>
          <h3 className="teacher">- Mr Jones</h3>
          <div className="checklistBlock"></div>
          <h3 className="blocking">Period 3: 09:00-10:00</h3>

<div className="row1">

          <div className="classDetails">
              <h3 className="card-header">Class details</h3>
              <div className='smol-half'style={{marginLeft:'20px',width:'80px'}} >
                         <p>Class:<br></br><br></br>Group:<br></br><br></br>Classroom:<br></br><br></br>Period:</p>
                         
                     </div>
                     <div className='smol-half' style={{marginRight:'20px', width:'140px'}}>
                     <p style={{fontWeight:600, textAlign:'right'}}>Grade 10 English<br></br><br></br>Group 2<br></br><br></br>A1<br></br><br></br>Period 3</p>
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
            <div className="card-header" style={{fontWeight:'700'}}>Your peers</div>
            <div className="peer-card"></div>
        </div>

        </div>
    );
}
export default Class