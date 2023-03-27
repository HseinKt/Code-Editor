 import SearchBar from "../components/search_page/search_bar"
 import Card from "../components/search_page/card"
 import Header from "../components/landing_page/header"
 import Footer from "../components/landing_page/footer"
import React, {useState} from 'react'

const SearchingPage = () => {
    const [name, setName] = useState("Hsein kteish");
    const [major, setMajor] = useState("Engineer");
    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    
    const runHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        
        setSearchInput("");
    }
    return (
        <div>
            <Header/>
            <SearchBar searchInput={searchInput} handleChange={handleChange} runHandler={runHandler}/>
            <div className="cards">
                <Card name={name} major={major}/>
            </div>
            <Footer/>
        </div>
        
    )
}

export default SearchingPage