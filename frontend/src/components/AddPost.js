import { useState } from "react";
import { Form, Button, Input } from "antd";

import "./AddPost.css";

function AddPost() {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  return (
    <div className="container">
      <div style={{ width: 200 }}>
        <h2>Add new post:</h2>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: 'Please give a title!' }]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[{ required: true, message: 'Please write a short description!' }]}
        >
          <Input.TextArea rows={4} placeholder="Write a caption..." />
        </Form.Item>
        <Form.Item
          name="imageLink"
        >
          <Input placeholder="image hyperlink" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddPost;