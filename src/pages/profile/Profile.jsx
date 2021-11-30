import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./profile.css"

export default function Profile() {
    return (
        <>
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
                <h4 className="profileInfoName" >Mark Zuck</h4>
                <span className="profileInfoDesc" >Yo fellow humans I'm definitely not a lizard person my dudes</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed />
                <Rightbar profile/>
        </div>
    </div>
</div>
        
    </>
    )
}
