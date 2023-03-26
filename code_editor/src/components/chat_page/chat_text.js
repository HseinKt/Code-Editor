import React from 'react';
import "./chat.css"

const ChatText = (props) => {
    return (
      <div className='chatTextContainer'>
        <div className='message'>
          {props.message}
        </div>
      </div>
    );
  }
 
export default ChatText;



