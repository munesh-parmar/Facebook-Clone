import React from 'react'
import "./rightbarhome.scss";
import { Usersonline } from "../../data";
import { Online } from '../online/Online';

const Rightbarhome = () => {
  return (
    <div className='rightBarHome'>
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
              <img src="/assests/birthdaygifts/gift.png" alt="" className="birthdayImg" />
              <span className="birthdayText"> <b>Munesh</b> and<b> other friends</b> have a birthday today.</span>

            </div>
        </div>

        <img src="/assests/ads/adv.jpg" alt="" className="rightbarAdvert" />
      <span className="rightbarFriend">Online Friends</span>
      <ul className="rightbarFriendlist">
             {Usersonline.map((u) => (
              <Online key={u.id} onlineuser = {u}  />
             ))}

             
              
      </ul>
    </div>
  )
}

export default Rightbarhome