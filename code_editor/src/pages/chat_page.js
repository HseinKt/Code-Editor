import Header from "../components/landing_page/header"
import Chat from "../components/chat_page/chat"
import ChatText from "../components/chat_page/chat_text"
import "../index.css";
import UseHttp from "../hooks/http-hook"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatingPage = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState("");
    const [token, setToken] = useState("");
    const params = new URLSearchParams(window.location.search);
    const target_id = params.get('id');
    const target_name = params.get('name');
    const navigate = useNavigate();
    
    const handleValue = (e) => {
        setValue(e.target.value)
    }

    const handleMessageSend =async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('target_id',target_id);
        formData.append('message_body',value);
        try {
            const data = await UseHttp("send_message","POST",formData,{
                Authorization:
                "Bearer "+ token 
            });
            setMessages([...messages, data.users]);
        } catch (error) {
            console.log(error);
        }
        setValue("");
    }

    useEffect(() => {
        //get the token
        const myToken = localStorage.getItem("token");
        if(!myToken) {
            navigate("/login");
        }
        setToken(myToken);

        const fetchData = async () => {
            try {
                const data = await UseHttp("get_message/"+target_id,"GET","",{
                    Authorization:
                    "Bearer "+myToken,
                });
                setMessages(data.users);
            } catch (error) {
                console.log("ERROR:::"+error);
            }
        }
        fetchData();
    }, []);

    return ( 
        <div>
            <Header/>
            <Chat value={value} handleValue={handleValue} handleMessageSend={handleMessageSend}/>

            <div className="ChatBox">
                {!!messages && messages.map((message,index) => (
                    <ChatText key={index} 
                            message={message.message_body} 
                            target_name={target_name}/>
                ))}
            </div>
        </div>
     );
}

export default ChatingPage;