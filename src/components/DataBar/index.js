// import "../SearchBar/style.css";
import { Users, Posts } from "../../dummydata.js";
import { useState } from 'react';
import API from "../../utils/API"
import DataCard from "../DataCard"

//TESTING ON topbar/Topbar.jsx
//Search functionality by username
//TODO: only display user name during search
//TODO: Treat as a boolean to only show results if true


export default  function DataBar() {
    const [citySearch, setCitySearch] = useState({
        city:""
    })
    const [brewList, setBrewList] = useState([])

    const handleInputChange= event =>{
        if (event.target.name === "city") {
            setCitySearch({
              ...citySearch,
              city: event.target.value
            })
            console.log(citySearch)
        }
     }
    
    const handleFormSubmit = e =>{
        e.preventDefault();
        API.getData(citySearch).then(res => {
           setBrewList(res.data)
            console.log(res.data)
        })
    }


    return (
        <div>
        <form onSubmit={handleFormSubmit}>
        <input onChange={handleInputChange} value ={citySearch.city} name="city" placeholder="Search your city"/> 
        <button>Search!</button>
    </form>
    <div className="postContainer">
    {brewList.map(posty=> <DataCard key={posty.id} id={posty.id} name={posty.name}   street = {posty.street} phone = {posty.phone} />)}
    </div>


    </div>
    );

}


