import React from 'react'
import "./post.scss";
import {Users} from "./../../data";
import { IconButton } from '@mui/material';
import { ChatBubbleOutlined, Favorite, MoreVert, ShareOutlined, ThumbUp } from '@mui/icons-material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from "react-router-dom";
const post = ( { post }) => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <Link to="/profile/userId">
                <img  src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                
                </Link>
             <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username }</span>
             <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">
                <IconButton>
                  <MoreVert className='postVertButton' />
                </IconButton>

              </div>
            
            
            </div>
        <div className="postCenter">
          <span className="postText">{post.body}</span> 
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite className='bottomLeftIcon' style={{color: "red"}} />
            <ThumbUp className='bottomLeftIcon' style={{color: "black"}}/>
            <span className="postLikeCounter">{post.like} </span>
      
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} . comments . share </span>
          </div>
        </div>

        <hr className="footerHr" />
        <div className="postBottomFooter">
          <div className="postBottomFooterItem">
            <ThumbUpIcon className='footerItem'/>
            <span className="footerText">Like</span>
          </div>
          <div className="postBottomFooterItem">
            <ChatBubbleOutlined className='footerItem'/>
            <span className="footerText">Comment</span>
          </div>
          <div className="postBottomFooterItem">
            <ShareOutlined className='footerItem'/>
            <span className="footerText">Share</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default post;