import { useContext } from "react";
import Context from "../../../Context/Context";
import Friend from "./Friend";
import './friends.css'
import { useSelector } from "react-redux";


function Friends(){
    let friendsMass = []
    let currentUser = useSelector(state => state.store.currentUser)
    let usersDate = useSelector(state => state.store.usersDate)
    if(currentUser.id){
    
        usersDate.forEach(item => {
            if (currentUser.friends.friends.includes(item.id)) {
                friendsMass.push(item)
            }
    })
}
    return(
        <div className="friends">
            <div className="friends_logo c_hover">
                Friends
                <span className="friends_count">{friendsMass.length}</span>
            </div>
            <div className="friends_list">
                {friendsMass.map(item=>{
                    return(<Friend key={Math.random()} item={item}/>)
                })}
            </div>
        </div>
    )
}
export default Friends