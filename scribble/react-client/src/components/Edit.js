import {Link} from 'react-router-dom';

const Edit=()=>{
    return(
        <div className="container">
        <div className="logo"></div>
      <input className="search" placeholder="Looking for someone?"></input>
      <div className="profile"></div>

      <div className="half1">
      <h1 className="bigHeader">Grade 10 History</h1>
          <h3 className="teacher">- Mr Jones</h3>

<div className="row1">

          <div className="classDetails2">
              <h3 className="card-header">Class details</h3>

              <p className="labelInput">Class name:</p>

                  <input className="inputField1" placeholder="History"></input>

                  <p className="labelInput">Group number</p>
                  <input className="inputField1" placeholder="Group 3"></input>

                  <p className="labelInput">Classroom:</p>
                  <input className="inputField1" placeholder="21 A"></input>

                  <p className="labelInput">Period:</p>
                  <input className="inputField1" placeholder="10th period"></input>

                  <p className="labelInput">Time:</p>
                  <input className="inputField1" placeholder="10:00-11:00"></input>
                 
                 <button className="changes">Make changes</button>
  
          </div>
          <div className="teacherNote2">
          <h3 className="card-header">Add a note to your class</h3>
          <textarea className="announcement2" placeholder="Hi class, please remember your upcoming presentation on the 20th of August!"></textarea>
          <button className="postmessage">Post message</button>
          <div className="illustration2" style={{marginTop:'100px'}}></div>

          </div>
          {/* //teachernote */}
</div>  
{/* row 1 */}
      </div>
      {/* half1 */}
          
        <div className="half2">
            <h2 className="card-header" style={{fontWeight:'700'}}>Learners</h2>
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
export default Edit