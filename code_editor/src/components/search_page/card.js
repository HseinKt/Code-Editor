import "./search.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/chat_page?id=${props.data.id}`);
      };

    return ( 
        <div className='container'>
            <div className="card_container">
                <div className="card_image"> </div>
                <div className='details'>
                    <h4 className="name"><b>{props.data.first_name+" "+props.data.last_name}</b></h4>
                    {/* <p className="major">{props.data.gender}</p> */}
                    <button onClick={handleSubmit}>send a message</button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;