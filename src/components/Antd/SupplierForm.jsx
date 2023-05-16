import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

function SupplierForm() {
  let navigate = useNavigate();
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/categories")
      .then(res => {
        setDescriptions(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onGenderChange = (value) => {
    switch (value) {
      case 'filterreddesc':
        form.setFieldsValue({
          note: 'Hi!',
        });
        break;
      default:
    }
  };

  const SubmiteClick = (values) => {
    axios.post("https://northwind.vercel.app/api/categories", values)
      .then(res => {
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [form] = Form.useForm();

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
          marginTop: 60,
        }}
        initialValues={{
          companyName: " ",
          contactName: " ",
          address: { city: " " },
        }}
        onFinish={SubmiteClick}
      >
        <Form.Item
          label="id"
          name="id"
          rules={[{ required: true, message: 'Please input id!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="description" label="description" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            {descriptions.map(desc => (
              <Option key={desc.id} value={desc.description}>{desc.description}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{
          offset: 8,
          span: 16,
        }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default SupplierForm;