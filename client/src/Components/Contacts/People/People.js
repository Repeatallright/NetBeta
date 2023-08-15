
import React from "react"
import Friend from "../Friends/Friend"
import './people.css'
import { useSelector } from "react-redux"

function People(){
    let currentUser = useSelector(state => state.store.currentUser)
    let usersDate = useSelector(state => state.store.usersDate)

    let [text, setText] = React.useState('')
    let ides = []
        usersDate.forEach(item => {
            if (item.name.toLowerCase().includes(text.toLowerCase()) && item != currentUser && text.length > 0) {
                ides.push(item)
            }
        })
    return (
        <div className="people">
            <div className="people_logo c_hover">
                PEOPLE
                <span onChange={()=> console.log('111')} className="people_count">{usersDate.length}</span>
            </div>
            <input className="people_input" onChange={(e)=> setText(e.target.value)} defaultValue="" type="text"/>
            <div className="people_liste">
                {ides.map(item=>{
                    return(<Friend key={Math.random()} item={item}/>)
                })}
            </div>
        </div>
    )
}
export default People
