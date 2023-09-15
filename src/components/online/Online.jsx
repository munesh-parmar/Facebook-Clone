import React from 'react'
import "./online.scss";
export const Online = ( { onlineuser } ) => {
  return (
    <div className='online'>
        <li className="rightbarFriend">
            <div className="rightbarprofileimgContainer">
                <img src={onlineuser.profilePicture} alt="" className="rightbarprofileImg" />
            <span className="rightbarOnline"> </span>
            </div>
            <span className="rightbarUsername"> {onlineuser.username} </span>
        </li>
    </div>
  )
}
