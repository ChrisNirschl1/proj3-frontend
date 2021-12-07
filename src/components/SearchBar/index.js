// import "../SearchBar/style.css";
import { Users, Posts } from "../../dummydata.js";
import { useState } from 'react';

//TESTING ON topbar/Topbar.jsx
//Search functionality by username
//TODO: only display user name during search
//TODO: Treat as a boolean to only show results if true


function SearchBar() {
    const [songSearch, setSongSearch] = useState('')
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search" onChange={event => {
                setSongSearch(event.target.value);
            }} />
            {Users.filter((val) => {
                if (songSearch == "") {
                    return val
                } else if (val.username.toLowerCase().includes(songSearch.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <div className="user-results" key={key}>
                        <p>{val.username} </p>
                    </div>
                )
            })}
        </div>
    );

}
export default SearchBar;

//<p>{val.username}</p>