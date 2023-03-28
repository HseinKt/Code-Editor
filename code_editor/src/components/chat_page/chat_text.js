import React from 'react';
import "./chat.css"


// useEffect(() => {
//   //get the token
//   const myToken = localStorage.getItem("token");
//   if(!myToken) {
//       navigate("/login");
//   }
//   setToken(myToken);

//   const fetchData = async () => {
//       try {
//           const data = await UseHttp("get_message/"+target_id,"GET","",{
//               Authorization:
//               "Bearer "+myToken,
//           });

//           setMessages(data.users);
//       } catch (error) {
//           console.log("ERROR:::"+error);
//       }
//   }
//   fetchData();
// }, []);

const ChatText = (props) => {
    return (
      <div className='chatTextContainer'>
        <div className='message'>
          <ul className='listStyle'>
            <li className='name'>{props.first_name}</li>
            <li className='message'>{props.message}</li>
          </ul>
        </div>
      </div>
    );
  }
 
export default ChatText;



