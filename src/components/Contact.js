import './Contact.css';
import PropTypes from 'prop-types';
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

// eslint-disable-next-line react/no-typos
Contact.PropTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
}


export default Contact;
