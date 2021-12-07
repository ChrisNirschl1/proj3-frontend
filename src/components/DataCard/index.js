import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import "./style.css"
import API from "../../utils/API"
import EditForm from "../EditForm"

export default function DataCard(props) {
  
   
    // const editReload = ()=>{
    //     setShowEditForm(false);
    //     props.reload();
    // }
    return (
        <div className="PostCard">
            <h2>{props.name}</h2>
           <h3>{props.street}</h3>
           <h3>{props.phone}</h3>
        </div>
    )
}

