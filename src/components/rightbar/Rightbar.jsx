import React from 'react'
import "./rightbar.scss"
import Rightbarhome from '../rightbarhome/Rightbarhome';
import Profilerightbar from '../profilerightbar/Profilerightbar';
const Rightbar = ({profile}) => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile ? <Profilerightbar /> : <Rightbarhome />}
      </div>
    </div>
  )
}

export default Rightbar;