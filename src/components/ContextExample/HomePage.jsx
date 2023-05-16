import React from 'react'
import { LoginContext } from './Context'
import { useContext } from 'react'

function HomePage() {
  const handleClick = () => {
    setLoggedIn(!loggedIn);
}
  const{loggedIn,setLoggedIn}=useContext(LoginContext)

  return (
    <div style={{border:"1px solid green",color:"green",borderWidth:"1",textAlign:"center"}}>
      <h1> This is home page</h1>
      <button onClick={handleClick} style={{color:"blue",width:"30",height:"10",fontSize:"10"}}> 
                {loggedIn ? "Logout" : "Login"}
            </button>   
            {loggedIn ? <h1>You are logged in</h1> : <p>You are not logged in</p>}
    </div>
  )
}

export default HomePage
