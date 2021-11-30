import "./share.css"
import {PermMedia} from "@material-ui/icons"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/1.jpeg" alt="" />
                    <input placeholder="What's on your mind?" type="text" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <PermMedia className="shareIcon"/>
                        <div className="shareOption">
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
