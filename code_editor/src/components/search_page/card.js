import "./search.css";

const Card = (props) => {
    return ( 
        <div className='container'>
            <div className="card_container">
                <div className="card_image"> </div>
                <div className='details'>
                    <h4 className="name"><b>{props.name}</b></h4>
                    <p className="major">{props.major}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Card;