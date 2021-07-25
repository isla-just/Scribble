import {Link} from 'react-router-dom';

const Login=()=>{
    return(
        <div className="scribble-container">
            <div className="input-container">
                <h1 className="main-header">SIGN IN</h1>
                <p className="body-text">Welcome back to your student portal!</p>
                <input className="details" placeholder="Your username"></input>
                <input className="details" placeholder="Your password"></input>
                <p className="forget">forgot your password?</p>
                
                <Link to="/home"><div className="btn">Log in</div></Link>
            </div>
        </div>
    );
}
export default Login