import React from 'react'
import "./profilerightbar.scss";
import { Link } from "react-router-dom";
const Profilerightbar = () => {
  return (
    <div className='profileRightBar'>
<div className="profileRightBarHeading">
    <span className="profilrRightBarTitle">User Information</span>
    <Link to="/profile/userId/edit" style={{textDecoration: "none"}}>
    <span className="editButton">Edit Profile</span>
    
    </Link>
</div>

<div className="profileRightBarInfo">
    <div className="profileRightBarInfoItem">
        <span className="profileRightBarIputKey">Email: </span>
    <span className="profileRightBarInfoValue">amberlogan@gmail.com</span>
    </div>
    <div className="profileRightBarInfoItem">
        <span className="profileRightBarIputKey">Phone: </span>
    <span className="profileRightBarInfoValue">+92 336 567856</span>
    </div>
    <div className="profileRightBarInfoItem">
        <span className="profileRightBarIputKey">Address: </span>
    <span className="profileRightBarInfoValue">Gulshan-e-Iqbal Block 10</span>
    </div>
    <div className="profileRightBarInfoItem">
        <span className="profileRightBarIputKey">Country: </span>
    <span className="profileRightBarInfoValue">Pakistan</span>
    </div>
    <div className="profileRightBarInfoItem">
        <span className="profileRightBarIputKey">Relationship Status: </span>
    <span className="profileRightBarInfoValue">Engaged</span>
    </div>
    
</div>
<h4 className="profileRightBarTitle">Close Friends</h4>
<div className="profileRightBarFollowings">
    <div className="profileRightBarFollowing">
<img src="/assests/person/friend1.jpg" alt="" className="profileRightBarFollowingImg" />
    <span className="RightBarFollowingName">Janet</span>
    </div>
    <div className="profileRightBarFollowing">
<img src="/assests/person/friend2.jpg" alt="" className="profileRightBarFollowingImg" />
    <span className="RightBarFollowingName">Isabella</span>
    </div>
    <div className="profileRightBarFollowing">
<img src="/assests/person/friend3.jpg" alt="" className="profileRightBarFollowingImg" />
    <span className="RightBarFollowingName">Beverly</span>
    </div>
    <div className="profileRightBarFollowing">
<img src="/assests/person/friend4.jpg" alt="" className="profileRightBarFollowingImg" />
    <span className="RightBarFollowingName">Glenna</span>
    </div>
    <div className="profileRightBarFollowing">
<img src="/assests/person/friend5.jpg" alt="" className="profileRightBarFollowingImg" />
    <span className="RightBarFollowingName">Alexis</span>
    </div>
    <div className="profileRightBarFollowing">
<img src="/assests/person/friend6.jpg" alt="" className="profileRightBarFollowingImg" />
    <span className="RightBarFollowingName">Kate</span>
    </div>
</div>
    </div>
  )
}

export default Profilerightbar