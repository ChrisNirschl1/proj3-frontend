import React, { useState, useEffect } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./style.css"
import {useParams} from "react-router-dom"
import API from "../../utils/API"

export default function Profile() {
    const [user, setUser] = useState({
        email: "",
        id: "",
        Post: []
    })
    const {id} = useParams();

    useEffect(() => {
        API.getUserData(id).then(res => {
            if (res.data) {
                setUser(res.data);
            }

        })

    }, [])
    return (
        <div>

            {!user.email ? <h1>No user</h1> : (
                <div>
        <Topbar />
        <div className="profile">
        <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">

                    <img className="profileCoverImg" src="./assets/cover.jpeg" alt="" />
                    <img className="profileUserImg" src="./assets/1.jpeg" alt="" />
                    </div>
                <div className="profileInfo">
                <h4 className="profileInfoName" >Welcome to {user.email}'s page </h4>
                <span className="profileInfoDesc" >Yo fellow humans I'm definitely not a lizard person my dudes</span>
                </div>
                <div>
                    
                </div>
            </div>
            <div className="profileRightBottom">
            
                {/* <Rightbar profile/> */}
        </div>
    </div>
</div>
</div>
            )}
        </div>
    )
}
