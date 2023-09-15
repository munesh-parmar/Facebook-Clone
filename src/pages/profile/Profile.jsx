import React from 'react';
import Navbar from "../../components/Navbar1/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.scss";
const Profile = () => {
  return (
    <div className='profile'>
        <Navbar />
        <div className="profileWrapper">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img src="/assests/profileCover/profilecover.jpg" alt="" srcset="" className='profilecoverImg' />
                    <img src="/assests/person/user.jpg" alt="" className="profileuserImg" />

                    </div>

                <div className="profileInfo">
                    <h3 className="profileName">Amber Logan</h3>
                    <span className="profileDesc">Hi, Firends!</span>
                </div>

                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile />
                </div>


            </div>
        </div>
    </div>
  )
}

export default Profile