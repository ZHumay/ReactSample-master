import { Button,Modal, Table } from 'antd';
import axios from 'axios';
import { ExclamationCircleFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import SupplierForm from './SupplierForm';

const { confirm } = Modal;


function AntdTable() {
    const[categories,setcategories]=useState([])
// const[loading,setloading]=useState(true)

useEffect(()=>{
    loadData()
  },[])

const loadData=()=>{
    axios.get("https://northwind.vercel.app/api/categories")
    .then((res)=>{
   
        setcategories(res.data)});
  
}


  const deletecategories = (id) => {
  confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content: 'Delete',
      onOk() {
        // setloading(true);
        axios.delete('https://northwind.vercel.app/api/categories/' + id)
          .then(data => {
            loadData();
          })

      },
      onCancel() {
        console.log('Cancel');
      },
    });

  }

 const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a,b) => a.description.localeCompare(b.description)
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      sorter: (c,d) => c.name.localeCompare(d.name)

    },
  
      {
        title:"Delete",
        dataIndex: "id",
        key:"id",
        render:(id)=><Button onClick={()=>deletecategories(id)} type='primary' danger>Delete</Button>
      }
    ]

  return (
    <>
<Table 
 dataSource={categories}
 columns={columns}
//  loading={loading}
 pagination={
    {
        pageSize:5
    }}
 />
    </>
  )
}

export default AntdTable