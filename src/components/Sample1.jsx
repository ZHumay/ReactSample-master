import React, { useState } from 'react'

function Sample1() {
let initialName="Humay"
    const[name,setName]=useState(initialName)

const changeName=()=>{
    if (name === initialName) {
        setName("Hummy")
      } else {
        setName(initialName)
      }
}


  return (
   <>
<h1>{name}</h1>
<button onClick={changeName}> Change name</button>
   </>
  )
}
export default Sample1
