import React from 'react'
import "./share.scss";
import { EmojiEmotions, PermMedia, VideoCameraFront } from '@mui/icons-material';
const Share = () => {
  return (
    <div className='share'> 
        <div className="shareWrapper">
           <div className="shareTop">
            <img src="/assests/person/user.jpg" alt="" className="shareProfileImg" />
          <input type="text" placeholder="What's on your mind Amber" className='shareInput'/>
           </div>
           <hr className="shareHr" />
           <div className="shareButton">
            <div className="shareOptions">
                <div className="shareOption">
                    <VideoCameraFront className='shareIcon' style={{color: "#bb0000f2"}} />
                    <span className="shareOptionText">Live Video</span>
                </div>
                <div className="shareOption">
                    <PermMedia className='shareIcon' style={{color: "#2e0196f1"}} />
                    <span className="shareOptionText">Photos/Videos</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions className='shareIcon' style={{color: "#bfc600ec"}} />
                    <span className="shareOptionText">Feelings/Activities</span>
                </div>    
            </div>
            </div> 
        </div>
    </div>
  )
}

export default Share