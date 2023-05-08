
import axios from 'axios';
import React, { useEffect, useState } from 'react'
function Sample7() {

    const [categories, setcategories] = useState([]);

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');


    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {

        axios.get('https://northwind.vercel.app/api/categories')
            .then(res => {
                setcategories(res.data);
            })

    }


    const add = () => {

        let newCategory = {
            name: name,
            description: description
        }

        axios.post('https://northwind.vercel.app/api/categories', newCategory)
            .then(res => {
                loadData();
            })
    }
    return (<>
        <div>
            <div>
                <label>Name: </label>
                <input type='text' onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label>Description: </label>
                <input type='text' onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div>
                <button onClick={add}>Add</button>
            </div>
        </div>
        <ul>
            {
                categories && categories.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>
    )

}

export default Sample7
