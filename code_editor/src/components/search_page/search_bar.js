import React, {useState} from 'react'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return ( 
        <div>
            <input type="text" value={searchInput} placeholder="Search here" onChange={handleChange} />
        </div>
    );
}
 
export default SearchBar;