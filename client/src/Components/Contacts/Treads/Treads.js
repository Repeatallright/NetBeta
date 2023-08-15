
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import './treads.css'
import { setContacts } from "../../../store/storageApp"
function Treads(){
    let dispatch = useDispatch()

    return(
        <div className="all_treads ">
            <i className="far chat c_hover fa-comment"></i>
            <Link to='/treadsBl' style={{textDecoration: 'none', color: '#fff'}} onClick={()=> dispatch(setContacts(false))} className="c_hover">Messenger</Link>
        </div>
    )
}
export default Treads