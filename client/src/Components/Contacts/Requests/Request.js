import './request.css'
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentPerson, setCurrentUser, setUsersDate } from "../../../store/storageApp";
import addFriend from '../../../hooks/addFriend';
import {DataFetching}from '../../../hooks/DataFetching'
import { getUserById } from '../../../hooks/findCurrentUser';

function Request(props){
    let dispatch = useDispatch()
    let usersDate = useSelector(state => state.store.usersDate)
    let currentUser = useSelector(state => state.store.currentUser)

    function createImg(props){
        if(window.screen.width > 500){
            return(<img src={require(`../../../imgs/Users/${props.item.img}`)} onClick={()=> dispatch(setCurrentPerson(props.item))} id={props.item.id} className="request_img" alt=""/>)
        }
        else{
            return(<Link to={'/bio'}><img src={require(`../../../imgs/Users/${props.item.img}`)} onClick={()=> dispatch(setCurrentPerson(props.item))} id={props.item.id} className="request_img" alt=""/></Link>)
        }
    }
    const commit = ()=>{
        console.log(props.item);
        let newArrey = addFriend(usersDate, currentUser, props.item, true)
        console.log(newArrey);
        dispatch(setCurrentUser(getUserById(newArrey, currentUser.id)))
        dispatch(setUsersDate(newArrey))
        console.log(currentUser);
        DataFetching.setUsers(newArrey)
        
    }

    return(
        <div className="request_item">
            <div className="info">
                {createImg(props)}
                <p className="request_name c_hover">{props.item.name}</p>
                </div>
                <div className="accept" onClick={()=> commit()}>Accept</div>
            </div>
    )
}
export default Request