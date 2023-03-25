import React, {useState} from 'react'
import "./search_bar.css";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return ( 
        <div className='searchBar'>
            <input type="text" className='searchInput' value={searchInput} placeholder="Search here" onChange={handleChange} />
        </div>
    );
}

export default SearchBar;