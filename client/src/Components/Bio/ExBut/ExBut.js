import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './ex_but.css'
import { setCurrentUser, setTread, setIsReg, setCurrentPerson, setIsPosts } from '../../../store/storageApp';

function ExBut (props){
    const dispatch = useDispatch()
    let navigate = useNavigate()

    function Exite(e){
        if(props.isId){
            dispatch(setCurrentUser({}))
            dispatch(setTread(false))
            dispatch(setIsReg(false))
            navigate('/') 
        }
        else{
            dispatch(setCurrentPerson({}))
            dispatch(setIsPosts(true))
            dispatch(setTread(false))
        }
    }

  return (
    <>
    <div className={`exite_but`} onClick={ e => Exite(e)}>{props.isId? `Exite`: `Close`}</div>
    </>
  )
}
export default ExBut