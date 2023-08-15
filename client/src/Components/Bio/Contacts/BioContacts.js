
import './contacts.css'

function Contacts(props){

    if(window.screen.width> 500){
        return(
            <div className="user_name">
                <p className="ans">Username</p>
                <p className="value">{props.args.name}</p>
                <p className="ans">Email</p>
                <p className="value">{props.args.email}</p>
            </div>
        )
    }
    else{
        return(
            <div className="user_name_mobile">
                <p className="ans_mobile">Username</p>
                <p className="value_mobile">{props.args.name}</p>
                <p className="ans_mobile">Email</p>
                <p className="value_mobile">{props.args.email}</p>
            </div>
        )
    }
    
}
export default Contacts