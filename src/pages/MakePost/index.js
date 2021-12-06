import React, {useState, useEffect} from 'react'
import "./style.css"
import {useHistory} from "react-router-dom"
import API from '../../utils/API'
import Topbar from '../../components/topbar/Topbar'

export default function MakePost(props) {
    const [newPost, setNewPost] = useState({
        songname:"",
        descrption: ""
    })

    const handleInputChange= e =>{
       const {name,value} = e.target;
       setNewPost({
           ...newPost,
           [name]:value
       })
    }
const history = useHistory();

    useEffect(()=>{
        if(!props.token){
            history.push("/")
        }

    }, [props.token])


    const handleFormSubmit = e =>{
        e.preventDefault();
        API.addPost(newPost, props.token).then(res => {
            history.push("/")
        })
    }
    //event.target is whatever is changed state; [name] expresses whatever that js (name becomes songname, description) and now you have a key value pair of the state and it's new value being handled; the spread operator spreads out the parts of newPost and allows updates to the one that is changed

    //Creating state here bc not needed anywhere besides making a new post
    // value is derived from state now
    return (
        <div className="MakePost">
            {/* <div><Topbar /></div> */}
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleInputChange} value ={newPost.songname} name="songname" placeholder="What Song"/> 
                
                <textarea onChange={handleInputChange} value ={newPost.description} name="description" placeholder="Thoughts on it?"/> 
                <button>Send Post</button>
            </form>
        </div>
    )
}
