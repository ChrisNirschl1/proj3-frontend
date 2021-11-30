import "./rightbar.css"
import {Users} from "../../dummydata"
import Online from "../online/Online"

export default function Rightbar({profile}) {
    const HomeRightBar = () => {
        return(
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src="./assets/birthday.png" alt="" />
                    <span className="birthdayText"> <b> Reptilian Overlord </b> and <b>69 other friends</b> have a birthday today. </span>
                </div>
                <img className="rightbarAd" src="./assets/ad.jpeg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
        <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">San Francisco</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">the planet of lizard people</span>
            </div>
        </div>
        <h4 className="rightBarTitle">Their Friends:</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src="./assets/4.jpeg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Jermaine Cole</span>
            </div>
        </div>
        </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
            {profile ? <ProfileRightbar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}
