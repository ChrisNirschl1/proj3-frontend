import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import "./style.css"
import API from "../../utils/API"
import EditForm from "../EditForm"

export default function PostCard(props) {
    const [showEditForm,setShowEditForm]= useState(false);
    const history = useHistory();
    
    const deletePost= ()=>{
        API.deletePost(props.id,props.token).then(res=>{
            console.log("deleted!")
            history.go(0)
          
        })
    }
    // const editReload = ()=>{
    //     setShowEditForm(false);
    //     props.reload();
    // }
    return (
        <div className="PostCard">
            <h3>{props.songname}</h3>
            <p>What're they thinking: {props.description}</p>
           {props.userId&&<Link to={`/profile/${props.userId}`}>Meet the poster</Link>}
           {props.canYouEdit&&!showEditForm &&<button onClick={()=>setShowEditForm(true)}>Edit your post</button>}
           {props.canYouEdit&&showEditForm &&<button onClick={()=>setShowEditForm(false)}>Remove Edit</button>}
           {props.canYouDelete&&<button onClick={deletePost}>Delete your post</button>}
           {showEditForm&&<EditForm {...props}/>}
        </div>
    )
}
