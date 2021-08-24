
import { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


const Cal=()=>{

    const [date, setDate] = useState(new Date());

    return(
        <div>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} className="react-calendar react-styling" style={{width:'500px'}} />
      </div>
    </div>
    )
}
export default Cal

