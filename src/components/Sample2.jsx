import React, { useState } from "react";

function Sample2() {
    
  const [counter, setCounter] = useState(0);
  const changeCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1> Counter:{counter} </h1>
      <button onClick={changeCounter}> Change</button>
    </>
  );
}

export default Sample2;
