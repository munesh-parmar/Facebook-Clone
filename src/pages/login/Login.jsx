import React from 'react'
import "./login.scss";
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Facebook</h3>
            <span className="loginDesc">Connect with friends and the world arround you.</span>

            </div>
            <div className="loginRight">
                <div className="loginBox">
                    
                <div className="bottom">
                    <form className='bottomBox'>
                        <input type="email" placeholder='Email' id='email' className='loginInput' required/>
                        <input type="password" placeholder='Password' id='password' className='loginInput' required/>
                        <button ype="submit" className="loginButton">Sign In</button>
                        <Link to="/register">
                        <button className="loginloginButton">Create New Account</button>
                        
                        </Link>

                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login