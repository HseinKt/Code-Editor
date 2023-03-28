import SearchBar from "../components/search_page/search_bar"
import Card from "../components/search_page/card"
import Header from "../components/landing_page/header"
import React, {useEffect, useState} from 'react'
import UseHttp from "../hooks/http-hook"
import { useNavigate } from "react-router-dom"
import "../index.css";

const SearchingPage = () => {
    const [images, setImages] = useState([]);
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
        setSearchInput("");

        const images= data.users.map(user => {
            const decodedImage = atob(user.picture);
            const new_text = decodedImage.replace('/public/','/storage/')
            return new_text;    
        });
        setImages(images);      
    }
    return (
        <div>
            <Header/>
            <SearchBar searchInput={searchInput} handleChange={handleChange} runHandler={runHandler}/>
            <div className="cards">
                {results.map((user, index) => (
                    <div>
                      <Card data={user} image={images[index]} />
                    </div>
                  ))}
            </div>

        </div> 
    )
}

export default SearchingPage