import React from 'react'
import "./stories.scss";
import Storycard from '../storycard/Storycard';
import {Users} from "../../data";
const Stories = () => {
  return (
    <div className='stories'>

<div className="storyCard">
<div className="overlay"></div>

    <img src="/assests/person/user.jpg" alt="" className="storyProfile" />
    <img src="/assests/person/user.jpg" alt="" className="storybackground" />
    <img src="/assests/person/upload.png" alt="" className="storyadd" />
    <span className="text">Amber</span>


</div>
{
    Users.map((u) =>(
<Storycard key={u.id} user={u}/>

    ))}
    </div>
  )
}

export default Stories