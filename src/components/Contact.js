import './Contact.css'

const name = "Lusidave";
const status = true;

function Contact(){
    return(
        <div className='Contact'>
            <img className="avatar" alt="" src='https://randomuser.me/api/portraits/men/50.jpg' />
            <div>
                <p>{name}</p>
                <div className="status">
                    <div className= {status ? "status-online" : "status-offline"} ></div>
                    <div className="status-text">
                    {status ? "online" : "offline"}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Contact;