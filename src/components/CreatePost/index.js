import React,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom";
// import "./style.css"
import API from '../../utils/API';

export default function CreatePost(props) {
    const [newPost, setNewPost] = useState({
        songname:"",
        description:"",
        

    })
    const history = useHistory();
    useEffect(() => {
        if(!props.token){
            console.log(history)
            history.push("/")
        }
    }, [props.token])

    const handleInputChange= e=>{
        const {songname,value} = e.target;
        //could be name?
        setNewPost({
            ...newPost,
            [songname]:value
            //could be name?
        })
    }

    const handleFormSubmit = e=>{
        e.preventDefault();
        API.addAPet(newPost.props.token).then(res=>{
            console.log(res.data);
            history.push("/")
        })
    }


    return (
        <div className="CreatePost">
            <h1>What music is on your mind?</h1>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleInputChange} value={newPost.songname} name="name" placeholder="name"/>
                
                <textarea onChange={handleInputChange} name="description" placeholder="description" value={newPost.description}></textarea>
                <button>Put it out!</button>
            </form>
        </div>
    )
}