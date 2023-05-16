import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <div style={{width:"100" ,display:"flex",justifyContent:"space-around"}}> 
        <Link to="/"> Home</Link>
    <Link to="/about"> About</Link>
    <Link to="/contact"> Contact</Link>
    <Link to="/productslist"> products</Link>

   </div>
 
  
   

  )
}

export default Header
