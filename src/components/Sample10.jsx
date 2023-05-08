import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Sample10() {
    const [suppliers, setsuppliers] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setsuppliers(res.data);
                setloading(false);
            })

    }, [])
  return (
    (<>
        {
            loading == true ? <h1>loading...</h1> : <>
    
                <ul>
                    {
                        suppliers && suppliers.map(item => <li>{item.companyName}</li>)
                    }
                </ul>
            </>
        }
        </>
        )
  )
}

export default Sample10
