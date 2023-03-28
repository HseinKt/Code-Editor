import "./search.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/card.jpg"

const Card = (props) => {

    const navigate = useNavigate();
    const name = props.data.first_name+" "+props.data.last_name;

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/chat_page?id=${props.data.id}`);
      };

    // const imageData = `data:image/jpeg;base64,${props.data.picture}`;
    console.log(props.data.picture);
    
    return ( 
        <div className='container'>
            <div className="card_container">
                <div className="card_image"> 
                
                    <img src={image} alt="picture"/> 
                </div>
                <div className='details'>
                    <h4 className="name"><b>{name}</b></h4>
                    <button onClick={handleSubmit}>send a message</button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;