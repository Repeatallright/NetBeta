import React from 'react'
import { useRef } from 'react'

function ChangeName(props) {
    let newName = useRef()
    function changeName (name){
      if(name.length >= 1){
        props.changer(name)
        
      }
      props.changeSet(false)
    }
  return (
    <div className='change_block'>
        <input ref={newName} type="text" className="change" />
        <div className="change_but" onClick={()=> changeName(newName.current.value)}>Change</div>
    </div>
  )
}

export default ChangeName