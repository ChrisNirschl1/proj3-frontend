import React, {useState, useEffect} from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./style.css"
import API from "../../utils/API"
import PostCard from "../../components/PostCard"

function Home(props) {
    const [post, setPost] = useState ([])
    //calling useEffect as this call below does not pertain to rendering something related to home
    useEffect(()=>{
       API.getAllPost().then(res=>{
           setPost(res.data);
       })
    },[])
    return (
    <>
        <Topbar />
        <div className="homeContainer">
        {/* <Sidebar /> */}
       <h1> What the people are listening to: </h1>
       <div className="postContainer">
           {post.map(posty=> <PostCard key={posty.id} id={posty.id} songname={posty.songname} token = {props.token} userId={posty.UserId} description = {posty.description} canYouDelete={props.user.id===posty.UserId} canYouEdit={props.user.id===posty.UserId} />)}
           
       </div>
        {/* <Rightbar /> */}
        </div>
        
    </>
    );
}

export default Home;