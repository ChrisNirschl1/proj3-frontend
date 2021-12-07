import React, {useState, useEffect} from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./style.css"
import API from "../../utils/API"
import PostCard from "../../components/PostCard"
import DataBar from "../../components/DataBar"
import DataCard from "../../components/DataCard"

function DataPage(props) {
    const [post, setPost] = useState ([])
    //calling useEffect as this call below does not pertain to rendering something related to home
    useEffect(()=>{
       API.getAllPost().then(res=>{
           setPost(res.data);
       })
    },[])
    return (
    <>
        {/* <Topbar /> */}
        <div className="homeContainer">
        {/* <Sidebar /> */}
       <h1> Good places nearby: </h1>
       <div className="postContainer">
           {post.map(posty=> <DataCard key={posty.id} id={posty.id} songname={posty.songname} token = {props.token} userId={posty.UserId} description = {posty.description} canYouDelete={props.user.id===posty.UserId} canYouEdit={props.user.id===posty.UserId} />)}
           
       </div>
      <DataBar></DataBar>
        </div>
        
    </>
    );
}

export default DataPage;