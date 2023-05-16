import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Sample11() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios.get('https://northwind.vercel.app/api/orders/')
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  };

  const handleDelete = (id) => {
    axios.delete("https://northwind.vercel.app/api/orders/"+id)
      .then(res => loadData())
      .catch(error => console.log(error));
  };

  
const addPost=()=>{
    axios.post("https://northwind.vercel.app/api/orders/",{
        name:"Humay",
        surname:"z",
        email:"kcmdnlsd"
    })
    .then(res=>loadData())
}

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.shipName}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          
        </div>
      ))}
      <button onClick={()=>addPost()}> Add</button>
    </div>
  );
}

export default Sample11;
