import React from 'react'
import "./sidebar.scss";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import EventIcon from '@mui/icons-material/Event';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuLink from '../menulink/MenuLink';
import Friends from '../friends/Friends';
import {Users} from "../../data";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <MenuLink Icon={<RssFeedIcon/> } text="Feed" />
        <MenuLink Icon={<ChatIcon/> } text="Chats" />
        <MenuLink Icon={<OndemandVideoIcon/> } text="Videos" />
        <MenuLink Icon={<PeopleAltIcon/> } text="Friends" />
        <MenuLink Icon={<BookmarksIcon/> } text="Bookmarks" />
        <MenuLink Icon={<LocalGroceryStoreIcon/> } text="Marketplace" />
        <MenuLink Icon={<EventIcon/> } text="Events" />
        <MenuLink Icon={<DarkModeIcon/> } text="Theme" />
        <MenuLink Icon={<LogoutIcon/> } text="Logout" />
        
        <button className="sidebarButton">Show  More</button>
        <hr className="sidebarHr" />

<ul className="sidebarFriendList">
  {Users.map((u)=> (
 <Friends key={u.id} user={u}/>

  ))}
</ul>

      </div>
    </div>
  )
}

export default Sidebar