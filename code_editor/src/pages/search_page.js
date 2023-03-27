 import SearchBar from "../components/search_page/search_bar"
 import Card from "../components/search_page/card"
 import Header from "../components/landing_page/header"
 import Footer from "../components/landing_page/footer"
import React, {useState} from 'react'

const SearchingPage = () => {
    const [name, setName] = useState("Hsein kteish");
    const [major, setMajor] = useState("Engineer");
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    
    return (
        <div>
            <Header/>
            <SearchBar searchInput={searchInput} handleChange={handleChange}/>
            <div className="cards">
                <Card name={name} major={major}/>
            </div>
            <Footer/>

        </div>
        
    )
}

export default SearchingPage