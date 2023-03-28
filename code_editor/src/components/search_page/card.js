import "./search.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {

    const navigate = useNavigate();
    const name = props.data.first_name+" "+props.data.last_name;

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/chat_page?id=${props.data.id}&name=${name}`);
      };

    // const imageData = `data:image/jpeg;base64,${props.data.picture}`;
    console.log(props.data.picture);

    return ( 
        <div className='container'>
            <div className="card_container">
                <div className="card_image"> 
                
                </div>
                <div className='details'>
                    <h4 className="name"><b>{name}</b></h4>
                    <button onClick={handleSubmit} className="btn">send a message</button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;