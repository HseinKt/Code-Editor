import Header from "../components/landing_page/header"
import Chat from "../components/chat_page/chat"
import { useState } from "react";

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
            <form onSubmit={handleMessageSend}>
                <input 
                    type="text" 
                    value={value} 
                    onChange={handleValue}
                />
                <button type="submit">
                    <div className="sendButton"> send</div>
                </button>
            </form>
        </div>
     );
}

export default ChatingPage;