import "./sidebar.css"
import {Chat, PlayCircleFilledOutlined, RssFeed, Group, Bookmark, WorkOutline, Event, School } from "@material-ui/icons"
import {Users} from "../../dummydata"
import CloseFriends from "../closeFriends/CloseFriends"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <Chat className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                    <Group className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon"/>
                    <span className="sidebarListItemText">bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">jobs</span>
                    </li>
                    <li className="sidebarListItem">
                    <Event className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                    <School className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map(u=>(
                        <CloseFriends key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}
