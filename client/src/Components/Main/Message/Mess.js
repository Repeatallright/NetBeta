import React, { useContext } from 'react'
import './treads.css'

function Mess(prop) {

  let treadClass = (function () {
    if (prop.user.id != prop.currentUser.id) return 'friend'
    else return 'user'
}())

  if(typeof (prop.user) != 'string'){
    return (
      <div className={`tread_block ${treadClass}`}>
        <div className="person_tread">
                <div className="tread_info">
                    <div className="tread_name">{prop.user.postName}</div>
                    <div className="tread_time">{prop.user.postDate}</div>
                </div>
                <div className="tread_content">
                {prop.user.postContent}
              </div>
            </div>
          </div>
    )
  }
  else{
    return(<div className="post_time">
      {prop.user}
    </div>)
    
  }
  
}

export default Mess