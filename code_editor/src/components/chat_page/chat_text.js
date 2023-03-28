import React from 'react';
import "./chat.css"

const ChatText = (props) => {
    return (
      <div className='chatTextContainer'>
        <div className='message'>
          <ul className='listStyle'>
            <li className='name'><span className='targetName'>{props.target_name}</span>  </li>
            <li className='sendMessage'>{props.message}</li>
          </ul>
        </div>
      </div>
    );
  }
 
export default ChatText;



