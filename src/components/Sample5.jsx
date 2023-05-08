import React, { useState } from "react";

function Sample5() {
    let animals=['dog', 'cat', 'bird', 'fish', 'rabbit', 'hamster', 'turtle', 'snake', 'lizard', 'frog', 'spider', 'scorpion', 'crab', 'shrimp', 'lobster', 'octopus', 'squid', 'jellyfish', 'starfish', 'ToYUQ']
    const[animal,setanimal]=useState(animals)
    const[fav,setfav]=useState([])

    const favclick=(item)=>{
        let filteredanimals=animal.filter(q=>q!=item)
        setanimal(filteredanimals)
        setfav([...fav,item])
    }
    const unfavclick=(item)=>{
        let removefav=fav.filter(q=> q!=item)
        setfav(removefav)
        setanimal([...animal,item])
        
    }

  return (
    <>
      <div style={{display:"flex"}}>
        <div style={{width:'50%'}}>
          <ul>
            {animal.map((item) => {
              return <li style={{cursor:"pointer"}} onClick={()=>{favclick(item)}}>{item}</li>;
            })}
          </ul>
        </div>

        <div>
            <ul>
                {
                    fav.map(item=>{
                        return <li style={{cursor:"pointer"}} onClick={()=>{unfavclick(item)}}> {item}</li>
                    })
                }
            </ul>
        </div>
      </div>
    </>
  );
}

export default Sample5;
