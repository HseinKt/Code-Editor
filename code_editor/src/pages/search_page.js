 import SearchBar from "../components/search_page/search_bar"
 import Card from "../components/search_page/card"
 import Header from "../components/landing_page/header"
 import Footer from "../components/landing_page/footer"
 import React, {useState} from 'react'


const SearchingPage = () => {
    const [name, setName] = useState("Hsein kteish");
    const [major, setMajor] = useState("Engineer");
        
    return (
        <div>
            <Header/>
            <SearchBar />
            <div className="cards">
                <Card name={name} major={major}/>
                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
            <Footer/>

        </div>
        
    )
}

export default SearchingPage