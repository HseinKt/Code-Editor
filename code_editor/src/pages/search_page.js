import SearchBar from "../components/search_page/search_bar"
import Card from "../components/search_page/card"
import Header from "../components/landing_page/header"
import React, {useEffect, useState} from 'react'
import UseHttp from "../hooks/http-hook"
import { useNavigate } from "react-router-dom"
import "../index.css";

const SearchingPage = () => {
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");
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
            "Bearer "+token
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

        </div> 
    )
}

export default SearchingPage