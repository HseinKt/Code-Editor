import Header from "../components/landing_page/header"
import Chat from "../components/chat_page/chat"
import ChatText from "../components/chat_page/chat_text"
import "../index.css";


import { useEffect, useState } from "react";

const ChatingPage = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState("");

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    const handleMessageSend = (e) => {
        e.preventDefault();
        setMessages([...messages, value]);
        setValue("");
    }
    console.log(messages);

    

    return ( 
        <div>
            <Header/>
            <Chat value={value} handleValue={handleValue} handleMessageSend={handleMessageSend}/>

            <div className="ChatBox">
                {messages.map((message,index) => (
                    <ChatText key={index} message={message}/>
                    
                ))}
            </div>
        </div>
     );
}

export default ChatingPage;