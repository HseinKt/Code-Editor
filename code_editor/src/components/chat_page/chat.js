import "./chat.css"
const Chat = (props) => {
    return ( 
        <div className="container">
            <form onSubmit={props.handleMessageSend} className="formText">
                <input 
                    type="text" 
                    className="inputText"
                    value={props.value} 
                    onChange={props.handleValue}
                />
                <button type="submit">
                    <div className="sendButton"></div>
                </button>
            </form>
        </div>
     );
}
 
export default Chat;