import "./search.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/card.jpg"

const Card = (props) => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/chat_page?id=${props.data.id}`);
      };

    return ( 
        <div className='container'>
            <div className="card_container">
                <div className="card_image"> 
                    <img src={image} alt="picture"/> 
                </div>
                <div className='details'>
                    <h4 className="name"><b>{props.data.first_name+" "+props.data.last_name}</b></h4>
                    <button onClick={handleSubmit}>send a message</button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;