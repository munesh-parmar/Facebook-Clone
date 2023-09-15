import React from 'react'
import "./register.scss";
import { Link } from "react-router-dom";
import { DriveFolderUploadOutlined } from '@mui/icons-material';
const Register = () => {
  return (
    <div className='register'>
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Facebook</h3>
            <span className="registerDesc">Connect with friends and the world around you on Facebook .</span>
            </div>

            <div className="registerRight">
                <div className="registerBox">
                    <div className="top">
                        <img src="/assests/profileCover/DefaultProfile.jpg" alt="" className='profileImg'/>
                        <div className="formInput">
                            <label htmlFor="file">Image : <DriveFolderUploadOutlined className='icon'/></label>
                       <input type="file" name="file" id="file" accept=".png,.jpg,.jpeg" style={{display: "none"}} />
                        </div>
                    </div>
                <div className="bottom">
                    <form className='bottomBox'>
                        <input type="text" placeholder='Username' id='username' className='registerInput' required/>
                        <input type="email" placeholder='Email' id='email' className='registerInput' required/>
                        <input type="password" placeholder='Password' id='password' className='registerInput' required/>
                        <input type="password" placeholder='Confirm Password' id='password' className='registerInput' required/>
<button ype="submit" className="registerButton">Sign Up</button>
<Link to="/login">
<button className="loginRegisterButton">Log into Account</button>

 </Link>

                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register