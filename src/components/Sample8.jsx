import axios from 'axios';
import React, { useEffect, useState } from 'react'
function Sample8() {
    const [counter, setcounter] = useState(0);
    const [todos, settodos] = useState([]);


    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                settodos(res.data)
  
            })

    }, [])



    return (<>
        <h1>Counter 2:  {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>+</button>
        <ul>
            {
                todos && todos.map(item => <li>{item.title}</li>)
            }
        </ul>
    </>
    )
}


export default Sample8
