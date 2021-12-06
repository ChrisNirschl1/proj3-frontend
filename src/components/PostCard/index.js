import React from 'react'
import "./style.css"

export default function PostCard(props) {
    return (
        <div className="PostCard">
            <h3>{props.songname}</h3>
            <p>What're they thinking: {props.description}</p>
        </div>
    )
}
