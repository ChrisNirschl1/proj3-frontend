import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">soundByte</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for posts and people" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="topbarlinks">Homepage</span>

                    <span className="topbarlinks">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconbadge">1</span>
                    </div>                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconbadge">1</span>
                    </div>                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconbadge">1</span>
                    </div>
                </div>
                <img src="/assets/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    );
}