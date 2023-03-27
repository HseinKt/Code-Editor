import SearchBar from "../components/search_page/search_bar"
import Card from "../components/search_page/card"
import Header from "../components/landing_page/header"
import Footer from "../components/landing_page/footer"
import React, {useState} from 'react'
import UseHttp from "../hooks/http-hook"

const SearchingPage = () => {
    // const [name, setName] = useState("Hsein kteish");
    // const [gender, setGender] = useState("Engineer");
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    // const [loading, setLoading] = useState(false);

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
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2xvZ2luIiwiaWF0IjoxNjc5ODc5Nzk2LCJleHAiOjE2Nzk4ODMzOTYsIm5iZiI6MTY3OTg3OTc5NiwianRpIjoickNhSzVqYVoxd2k1WXpQNiIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.fu3JHYksqm9LBPlDyM7H2FfIQnvN7alLBaeTh2UXSNQ",
        });

        setResults(data.users);

        console.log(data.users);
        console.log(data.users[0].first_name);
        console.log(data.users[0].gender);

        setSearchInput("");
    }

    return (
        <div>
            <Header/>
            <SearchBar searchInput={searchInput} handleChange={handleChange} runHandler={runHandler}/>
            <div className="cards">
{                console.log(results)}
                {/* {results.length>0 && (
                    <ul>
                    {results.map((user) => (
                      <li key={user.id}>{user.name}</li>
                    ))}
                  </ul>
                )} */}
                
                 {/* results.map((user) => {
                    
                    })}
                    <Card name={searchInput} gender={"gender"}/>
    
                    {messages.map((message,index) => (
                        <ChatText key={index} message={message}/>
                        
                    ))} */}

            </div>
            <Footer/>
        </div>
        
    )
}

export default SearchingPage