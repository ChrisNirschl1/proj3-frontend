import React, {useState} from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function Topbar(props) {
   const userId = props.user
   console.log(props)
   console.log(userId)

   


    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link className="logo" to="/">soundByte</Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for posts and people" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                <Link className="topbarlinks" to="/">Home</Link>

                <Link className="topbarlinks" to="/newpost">New Post</Link>

                <Link className="topbarlinks" to={`/profile/${userId}`}>Profile</Link>

                
                

             
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconbadge">1</span>
                    </div>                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconbadge">1</span>
                    </div>                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconbadge">1</span>
                    </div>
                </div>
                <img src="/assets/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    );
}