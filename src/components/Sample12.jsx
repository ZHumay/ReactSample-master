// import React, { useState, useEffect } from 'react';


// function Sample12() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         // count değeri her değiştiğinde bu fonksiyon çalışacak
//         document.title = `You clicked ${count} times`;
//       }, [count]);
    
//       return (
//         <div>
//           <p>You clicked {count} times</p>
//           <button onClick={() => setCount(count + 1)}>Click me</button>
//         </div>
//       );
// }

// export default Sample12

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Example() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => setData(response.data))
//       .catch(error => console.log(error));
//   }, [data]);

//   return (
//     <ul>
//       {data.map(item => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default Example;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sample12() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      {data ? (
        <p>Title: {data.title}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Sample12