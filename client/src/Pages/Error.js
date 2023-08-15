import React from 'react'
import { useNavigate } from 'react-router'

export default function Error() {
  let navigate = useNavigate()

  setTimeout(()=>{
    navigate('./main')
  }, 2000)
  return (
    <div>Error</div>
  )
}
