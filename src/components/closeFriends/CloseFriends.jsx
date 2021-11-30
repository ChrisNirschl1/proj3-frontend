import "./closefriends.css"

export default function CloseFriends({user}) {
    return (
        <li className="sidebarFriends">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
    )
}
