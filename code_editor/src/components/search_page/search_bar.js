import "./search.css";

const SearchBar = (props) => {

    return ( 
        <div className='searchBar'>
            <input 
                type="text" 
                className='searchInput' 
                placeholder="Search here" 
                value={props.searchInput} 
                onChange={props.handleChange} />
        </div>
    );
}

export default SearchBar;