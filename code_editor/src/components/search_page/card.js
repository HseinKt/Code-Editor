import React, {useState} from 'react'
import "./search.css";

const Card = () => {

    const [name, setName] = useState("Hsein kteish");
    const [major, setMajor] = useState("Engineer");

    return ( 
        <div className='container'>
            <div className="card_container">
                <div className="card_image"></div>
                <div className='details'>
                    <h4 className="name"><b>{name}</b></h4>
                    <p className="major">{major}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Card;