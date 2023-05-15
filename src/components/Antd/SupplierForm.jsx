import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



function SupplierForm() {

    let navigate=useNavigate()

    const SubmiteClick = (values) => {

        axios.post("https://northwind.vercel.app/api/suppliers",values)
        .then(res=>{
           navigate("/")
        })
       };
  return (
    <>
 <Form
    name="basic"
    labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        marginTop:60
      }}
    initialValues={{
      companyName:" ", contactName:" ", address:{city:" "}
    }}
    onFinish={SubmiteClick}
   
  >
     <Form.Item
        label="CompanyName"
        name="companyName"
        rules={[{ required: true, message: 'Please input Companyname!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="ContactName"
        name="contactName"
        rules={[{ required: true, message: 'Please input Contactname!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="City"
        name={['address', 'city']}
        rules={[{ required: true, message: 'Please input city!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item  wrapperCol={{
        offset: 8,
        span: 16,
      }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      </Form>
    </>
  )
}

export default SupplierForm
