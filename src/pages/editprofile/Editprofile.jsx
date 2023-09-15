import React from "react";
import Navbar from "../../components/Navbar1/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./editprofile.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
const Editprofile = () => {
  return (
    <div className="editprofile">
      <Navbar />
      <div className="editProfileWrapper">
        <Sidebar profile />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assests/profileCover/profilecover.jpg"
                alt=""
                srcset=""
                className="profilecoverImg"
              />
              <img
                src="/assests/person/user.jpg"
                alt=""
                className="profileuserImg"
              />
            </div>

            <div className="profileInfo">
              <h3 className="profileName">Amber Logan</h3>
              <span className="profileDesc">Hi, Firends!</span>
            </div>
          </div>
          <div className="editprofileRightBottom">
            <div className="top">
              <h1>Edit User Profile</h1>
            </div>
            <div className="bottom">
              <div className="left">
                <img
                  src="/assests/profilecover/DefaultProfile.jpg"
                  alt=""
                  srcset=""
                />
              </div>

              <div className="right">
                <form>
                  <div className="formInput">
                    <label htmlFor="file">
                      Image: <DriveFolderUploadOutlined className="icon"  />
                    </label>
                    <input type="file" id="file" style={{display: "none"}}/>
                  </div>

                  <div className="formInput">
                    <label>Name</label>
                    <input type="text" placeholder="Jane Doe" />
                  </div>
                  <div className="formInput">
                    <label>Username</label>
                    <input type="text" placeholder="Jane_doe" />
                  </div>
                  <div className="formInput">
                    <label>Email</label>
                    <input type="email" placeholder="Jane_doe@gmail.com" />
                  </div>
                  <div className="formInput">
                    <label>Phone</label>
                    <input type="text" placeholder="+92 5678 9876" />
                  </div>
                  <div className="formInput">
                    <label>Address</label>
                    <input type="text" placeholder="New Karachi Block 7" />
                  </div>
                  <div className="formInput">
                    <label>Country</label>
                    <input type="text" placeholder="Pakistan" />
                  </div>
                  <button type="submit" className="updateButton">
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Editprofile;
