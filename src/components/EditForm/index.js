import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import "./style.css"
import API from "../../utils/API"


export default function EditForm(props) {
    const [postEdit, setPostEdit] = useState({
        name:props.name,
        description:props.description
       
    })
    const history = useHistory();

    const handleInputChange= e =>{
        const {name,value} = e.target;
        setPostEdit({
            ...postEdit,
            [name]:value
        })
     }
     const handleFormSubmit = e =>{
        e.preventDefault();
        API.editPost(postEdit,props.id, props.token).then(res => {
            history.go(0)
        })
    }

    return (
        <div className="MakePost">
        <form onSubmit={handleFormSubmit}>
            {/* <input onChange={handleInputChange} value ={postEdit.songname} name="songname" placeholder="What Song"/>  */}
            
            <textarea onChange={handleInputChange} value ={postEdit.description} name="description" placeholder="Thoughts on it now?"/> 
            <button >Change Post</button>
        </form>
    </div>
    )
}
