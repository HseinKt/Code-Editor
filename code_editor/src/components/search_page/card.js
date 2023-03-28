import "./search.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/card.jpg"
const Card = (props) => {
    const { data, image } = props.image;
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/chat_page?id=${props.data.id}&name=${props.data.username}`);
      };

    // const imageData = `data:image/jpeg;base64,${props.data.picture}`;
    console.log(props.data.picture);

    return ( 
        <div className='container'>
            <div className="card_container">
                <div className="card_image"> 
                    <img className="image_card" src={img} alt="picture"/> 
                </div>
                <div className='details'>
                    <h4 className="name"><b>{props.data.first_name+" "+props.data.last_name}</b></h4>
                    <button className="messagebtn" onClick={handleSubmit}>send a message</button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;