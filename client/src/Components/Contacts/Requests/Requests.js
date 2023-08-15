
import Request from "./Request";
import './request.css'
import { useSelector } from "react-redux";


function Requests(){
    let requestsMass = []
    let currentUser = useSelector(state => state.store.currentUser)
    let usersDate = useSelector(state => state.store.usersDate)
    if(currentUser.id){
    
        usersDate.forEach(item => {
            if (currentUser.friends.requests.includes(item.id)) {
                requestsMass.push(item)
            }
    })
}
    return(
        <div className="requests">
            <div className="requests_logo c_hover">
                Requests
                <span className="requests_count">{requestsMass.length}</span>
            </div>
            <div className="requests_list">
                {requestsMass.map(item=>{
                    return(<Request key={Math.random()} item={item}/>)
                })}
            </div>
        </div>
    )
}
export default Requests