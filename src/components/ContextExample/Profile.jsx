import React from 'react'
import { LoginContext } from './Context'
import { useContext } from 'react'

function Profile() {
    const{loggedIn,setLoggedIn}=useContext(LoginContext)

  return (
    <div style={{border:"1px solid purple",color:"purple",borderWidth:"1",textAlign:"center"}}>
      <h1> this is profile page</h1>
      {loggedIn ? <h1> Your are logged in</h1>:<p> Your are not logged in</p>}

    </div>
  )
}

export default Profile
