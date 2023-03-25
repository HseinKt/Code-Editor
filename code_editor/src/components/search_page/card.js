import React, {useState} from 'react'
import "./search.css";

const Card = () => {
    return ( 
        <div>
            <div className="card_container">
                {/* <img src="../images/card.jpg" alt="card" /> */}
                <div className="card_image"></div>
                <div className='details'>
                    <h4 className="name"><b>Name name</b></h4>
                    <p className="major">Major</p>
                </div>
                
            </div>
        </div>
     );
}
 
export default Card;