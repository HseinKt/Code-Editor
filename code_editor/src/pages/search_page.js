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
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2xvZ2luIiwiaWF0IjoxNjc5OTIxNjUyLCJleHAiOjE2Nzk5MjUyNTIsIm5iZiI6MTY3OTkyMTY1MiwianRpIjoiSWQ4WTZ1WDg4RTlBaTM1VCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.rRkcU05SMxXcGiqucEoeBY0ynwW_Cng7bPLHFKu9mow",
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