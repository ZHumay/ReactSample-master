import React, { useState } from 'react'

function Sample3() {

let[number,setNumber]=useState(0)


const randomNumber=()=>{
 number=Math.floor(Math.random()*100)
setNumber(number)
}
  return (
   <>
   <h1> Number:{number}</h1>
   <button onClick={randomNumber}> Random</button>
   
   </>
  )
}

export default Sample3
