import { useContext, useRef, useEffect, useState } from "react"
import Context from '../../Context/Context'
import React from "react"
import move from "../../hooks/move"
import { useDispatch } from "react-redux"
import './registrate.css'
import axios from "axios"




export default function Singin() {
  let dispatch = useDispatch()
  const hideBlock = useRef()
    const iteme = useRef()
    const {setRegister, usersDate, setImg, Registrate, name, email, password, isMobile} = useContext(Context)

    useEffect(()=> {if(window.screen.width < 500) move(false, iteme, hideBlock)})


    function CheckIsAccaunt(){
        let mass = true
        console.log(usersDate[0]);
        if(usersDate[0]){
            usersDate.forEach(item=>{
                mass = item.email === email.current.value && item.name === name.current.value ? true: false
            })
        }
        
        if(!mass) Registrate()
        else dispatch(setRegister(false))

        
    }



    const ImageOnChange = async (event) =>{
        const image = event.target.files[0]
        const formData = new FormData()
        await formData.append('upload', image)
        let info = await axios.post(`http://192.168.0.107:4001/upload`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(info.data.originalname);
        setImg(info.data.originalname)
      }
      
        

    
    if(!isMobile){
    return(
        <div className="container">
        <h2 className="login_lable">Sign up</h2>
        <input ref={name} type="text" className="username_in bio_inputs" placeholder="Username"/>
        <input ref={email} type="text" className="login_in bio_inputs" placeholder="Login"/>
        <input ref={password} type="text" className="password_in bio_inputs" placeholder="Password"/>
        <div className="image"><input name="upload" type="file" onChange={(e) => ImageOnChange(e)} className="image_upload"/>Image +</div>
        

        <div className="reg_unactive" onClick={()=> dispatch(setRegister(false))}>Sign in</div>

            <button className="reg_but" onClick={()=> CheckIsAccaunt()}>Reg</button>
        
    </div>
    )
    }
    
    else{
        return(
        <div className="mobile_bio">

            <div ref={hideBlock} className="hide_window" style={{display: 'flex'}}></div>
            
        <div ref={iteme} className="login_window">
        
        <div className="container">
    <h2 className="login_lable">Sign up</h2>
    <input ref={name} type="text" className="username_in" placeholder="Username"/>
    <input ref={email} type="text" className="login_in" placeholder="Login"/>
    <input ref={password} type="text" className="password_in" placeholder="Password"/>
    <div className="image"><input name="upload" type="file"  onChange={(e) => ImageOnChange(e)} className="image_upload"/>Image +</div>
    <div className="reg_unactive" onClick={()=> dispatch(setRegister(false))}>Sign in</div>

        <button className="reg_but" onClick={()=> CheckIsAccaunt()}>Sign up</button>
    
</div>
</div> 
</div>
    )
    }
}
