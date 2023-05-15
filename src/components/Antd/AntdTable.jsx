import { Button,Modal, Table } from 'antd';
import axios from 'axios';
import { ExclamationCircleFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'

const { confirm } = Modal;


function AntdTable() {
    const[suppliers,setSuppliers]=useState([])
// const[loading,setloading]=useState(true)

useEffect(()=>{
    loadData()
  },[])

const loadData=()=>{
    axios.get("https://northwind.vercel.app/api/suppliers")
    .then(res=>{
        setSuppliers(res.data)})
        // setloading(false)
}


  const deleteSupplier = (id) => {
  confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content: 'Delete',
      onOk() {
        // setloading(true);
        axios.delete('https://northwind.vercel.app/api/suppliers/' + id)
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
      title: 'companyName',
      dataIndex: 'companyName',
      key: 'companyName',
      sorter: (a,b) => a.companyName.localeCompare(b.companyName)
    },
    {
      title: 'contactName',
      dataIndex: 'contactName',
      key: 'contactName',
      sorter: (c,d) => c.contactName.localeCompare(d.contactName)

    },
    {
        title: 'City',
        dataIndex: 'City',
        render: (_,item)=>item.address?.city,
        key: 'City',
      },
      {
        title:"Delete",
        dataIndex: "id",
        key:"id",
        render:(id)=><Button onClick={()=>deleteSupplier(id)} type='primary' danger>Delete</Button>
      }
    ]

  return (
    <>
<Table 
 dataSource={suppliers}
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