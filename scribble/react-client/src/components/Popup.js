
import { useState } from 'react';

const Popup=()=>{

    const [date, setDate] = useState(new Date());

    return(
        <div className="blur">
            <div className="card-popup">
                <div className="close"></div>
                <h1>The class has been updated</h1>
                <p>You can continue browsing <br></br>through your classes</p>
                <div className="illustration" style={{marginTop:'40px'}}></div>
            </div>
    </div>
    )
}
export default Popup

