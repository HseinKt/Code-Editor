import SearchBar from "../components/search_page/search_bar"
import Card from "../components/search_page/card"
import Header from "../components/landing_page/header"
import Footer from "../components/landing_page/footer"
import React, {useEffect, useState} from 'react'
import UseHttp from "../hooks/http-hook"
import { useNavigate } from "react-router-dom"

const SearchingPage = () => {
    // const [name, setName] = useState("Hsein kteish");
    // const [gender, setGender] = useState("Engineer");
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    // const [loading, setLoading] = useState(false);
    const [token, setToken] = useState("");

    const navigate = useNavigate();
    useEffect(()=>{
        const myToken = localStorage.getItem("token");
        if (!myToken) {
          navigate("/login")
        }
        else{
          setToken(myToken)
        }
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    
    const runHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('first_name',searchInput);
        const data = await UseHttp("search_by_name","POST",formData,{
            Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2xvZ2luIiwiaWF0IjoxNjc5OTM3NDU1LCJleHAiOjE2Nzk5NDEwNTUsIm5iZiI6MTY3OTkzNzQ1NSwianRpIjoieHZGRERzQU16ZVBkT1hZciIsInN1YiI6IjQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.nDhzZPXKBvZ8tJ1MdxS2FGoZVbMLKr13MZoDG-ynl2I",
        });

        setResults(data.users);
        console.log(data.users);
        setSearchInput("");
    }

    return (
        <div>
            <Header/>
            <SearchBar searchInput={searchInput} handleChange={handleChange} runHandler={runHandler}/>
            <div className="cards">
                {results.map((user) => (
                    <Card data={user}/>
                ))}
            </div>
            <Footer/>
        </div> 
    )
}

export default SearchingPage