import './friends.css'
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentPerson } from "../../../store/storageApp";

function Friend(props){
    let dispatch = useDispatch()

    function createImg(props){
        if(window.screen.width > 500){
            return(<img src={require(`../../../imgs/Users/${props.item.img}`)} onClick={()=> dispatch(setCurrentPerson(props.item))} id={props.item.id} className="friend_img" alt=""/>)
        }
        else{
            return(<Link to={'/bio'}><img src={require(`../../../imgs/Users/${props.item.img}`)} onClick={()=> dispatch(setCurrentPerson(props.item))} id={props.item.id} className="friend_img" alt=""/></Link>)
        }
    }

    return(
        <div className="friend_item">
                {createImg(props)}
                <p className="friend_name c_hover">{props.item.name}</p>
            </div>
    )
}
export default Friend