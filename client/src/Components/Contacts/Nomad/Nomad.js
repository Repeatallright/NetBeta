
import { useDispatch, useSelector } from "react-redux";
import './nomad.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setContacts, setCurrentPerson} from "../../../store/storageApp";


function Nomad(){
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let currentUser = useSelector(state => state.store.currentUser)
    if(!currentUser.email){
        navigate('/')
    }
    
    function setter(){
            dispatch(setContacts(false))
            dispatch(setCurrentPerson({})) 
    }

    return(
        <div className="nomad_list ">
            <div className="back_menu" onClick={()=> dispatch(setContacts(false))}>+</div>
            
            {window.screen.width <= 500? <Link to={'/bio'}><button className="enter_but" onClick={(e)=> setter()}>Profile</button></Link>: ''}
        </div>
    )
}
export default Nomad
