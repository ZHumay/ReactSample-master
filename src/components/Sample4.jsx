import React, { useState } from "react";

function Sample4() {
const[size,setsize]=useState(10)

const changeSize=()=>{
    let randomsize=Math.floor(Math.random()*100)
    setsize(randomsize)
}


  return (
    <>
      <p style={{fontSize:size}}> Humay</p>
      <button onClick={()=>changeSize()}>change </button>
    </>
  );
}

export default Sample4;
