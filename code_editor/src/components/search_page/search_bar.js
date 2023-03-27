import "./search.css";

const SearchBar = (props) => {

    return ( 
        <div >
            <form onSubmit={props.runHandler} className='searchBar'>
                <input 
                    type="text" 
                    className='searchInput' 
                    placeholder="Search here" 
                    value={props.searchInput} 
                    onChange={props.handleChange} 
                />
                <input type="submit" hidden/>
            </form>
            
        </div>
    );
}

export default SearchBar;