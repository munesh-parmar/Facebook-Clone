import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from '../../components/feed/Feed';
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.scss";
import Navbar from '../../components/Navbar1/Navbar';
const Home = () => {
  return (
   <div className="home">
      <Navbar/>

    <div className="homeContainer">
             <Sidebar />
             <Feed />
            <Rightbar />
            
        </div>
   </div>
        
   
  )
}

export default Home