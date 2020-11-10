import './Contact.css';
import propTypes from 'prop-types';
import React from "react";

function Contact(props){
    return(
        <div className='Contact'>
            <img className="avatar" 
            alt={props.name} 
            src={props.avatar} />
            <div>
                <p>{props.name}</p>
                <div className="status">
                    <div className= {props.online ? "status-online" : "status-offline"} ></div>
                    <div className="status-text">
                    {props.online ? "online" : "offline"}
                    </div>
                </div>
            </div>
        </div>
    )
}


Contact.propTypes = {
    name: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    online: propTypes.bool.isRequired
}


export default Contact;
