import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import {useParams} from "react-router-dom";
import { Col, Container, Row, } from 'reactstrap'
import { Link } from "react-router-dom";
import { ListGroupItemHeading, Spinner, Table } from "reactstrap";

import Layout from './Layout'

function UsersPost() {
   const[data,setData]=useState([])
   const [editid, seteditid] = useState('');
   const [editbody, seteditbody] = useState(0);
   const [edittitle, setedittitle] = useState(0)

    const {id}=useParams()


    const removeProduct = (id) => {
        let filtereddata = data.filter(q => q.id != id);
        setData(filtereddata)
    }

    const editdata = (item) => {
        seteditid(item.name);
        seteditbody(item.unitPrice)
        setedittitle(item.id)
    }


useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
.then(res=>setData(res.data))
},[])
   console.log(id);
  return (
<Layout>
    <Row>
        <Col ms={12}>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>User-id</th>
              <th>body</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(
                (item =>(
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.body}</td>
                    <td>{item.title}</td>
                    <td><button style={{color:"red"}} onClick={() => removeProduct(item.id)}>Delete </button></td>
                    <td><button style={{color:"green"}} onClick={() => editdata(item)}>Edit</button></td>
               
                  </tr>)
                )
              )}
          </tbody>
        </Table>
        </Col>
    </Row>
</Layout>
  )
}

export default UsersPost