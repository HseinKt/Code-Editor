import "./search.css";

const Card = (props) => {

    return ( 
        <div className='container'>
            <div className="card_container">
                <div className="card_image"> </div>
                <div className='details'>
                    <h4 className="name"><b>{props.data.first_name+" "+props.data.last_name}</b></h4>
                    <p className="major">{props.data.gender}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Card;