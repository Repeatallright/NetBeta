import Treads from "./Treads/Treads";
import People from "./People/People";
import Friends from "./Friends/Friends";
import Nomad from "./Nomad/Nomad";
// import Request from "./Requests/Requests";
import {useEffect, useRef } from "react";

import './contacts.css'

import { useSelector } from "react-redux";
import Requests from "./Requests/Requests";


function Contacts (){

    let isContacts = useSelector(state => state.store.isContacts)
    let contacts = useRef()
    let but = useRef()
    useEffect(()=>{
        if(window.screen.width <= 500){
            isContacts? contacts.current.style.transform = `translate(0)` : contacts.current.style.transform = `translate(-100%)`
        }
        
    }, [isContacts])
    
    return(
        <div ref={contacts} className="contacts">
            <div className="container_cont">
                <Nomad/>
                <Treads/>
                <People/>
                <Friends/>
                <Requests/>
                
                <div className="version_pr">v. 0.2.23</div>
            </div>
        </div>
    )
}
export default Contacts