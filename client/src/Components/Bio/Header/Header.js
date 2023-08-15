import { useState } from 'react';
import { useRef } from 'react';
import './header.css'
import ChangeName from './ChangeName';
import { useContext } from 'react';
import Context from '../../../Context/Context';
import { useDispatch } from 'react-redux';
import { changeUsers } from './changeUsers';
import { changePosts } from './changePosts';
import { useSelector } from 'react-redux';
import { setCurrentPerson, setCurrentUser, setPostsDate, setUsersDate } from '../../../store/storageApp';

function Header(props){
    let dispatch = useDispatch()
    let usersDate = useSelector(state=> state.store.usersDate)
    let postsDate = useSelector(state=> state.store.postsDate)
    let currentUser = useSelector(state=> state.store.currentUser)
    let currentPerson = useSelector(state=> state.store.currentPerson)
    let [isChanged, setIsChanged] = useState(false)
    let data = useRef()
    let name = props.item.name;
    if(name.length > 20) name = `${name.substring(0, 20)}...`

   
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
    function changeSet(){
        isChanged ? setIsChanged(false): setIsChanged(true)
        // dispatch({type: 'SET_CTR'})
    }
    async function ChangeGets(name){
        await changePosts(postsDate, currentUser, name, setP)
        await changeUsers(usersDate, currentUser, currentPerson,  name, setU)
        console.log('aaa');
    }
    function setU(arg, cp, cu){
        dispatch(setUsersDate(arg))
        dispatch(setCurrentPerson(cp))
        dispatch(setCurrentUser(cu))   
    }
    function setP(arg, cu){
        dispatch(setPostsDate(arg))
        dispatch(setCurrentUser(cu))  
    }
    //LOGIC
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
    
    

    return(
        <div className="bio_header">
            <div ref={data} onClick={()=> changeSet()} className="name">{name}</div>
            {isChanged && name == currentUser.name? <ChangeName changer={ChangeGets} changeSet={setIsChanged}/>: ''} 
            <div className="describe"></div>
        </div>
    )
}
export default Header