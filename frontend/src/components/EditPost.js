import { useState } from "react";
import { Layout, Form, Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function EditPost({post}) {
  console.log(post)
  const fields = [post]
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const handleBack = async (e) => {
    navigate("/");
  }

  return (
    <Layout className="layout">
      <Header>
        <Button type="primary" onClick={handleBack}>
          Back
        </Button>
        <h1>Tweeter</h1>
        <p> </p>
      </Header>
      <Content style={{ padding: '50px' }}>
        <h2>Edit post:</h2>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={post}
          onFinish={onFinish}
        >
          <Form.Item
            name="title"
            rules={[{ required: true, message: 'Please give a title!' }]}
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            name="desc"
            rules={[{ required: true, message: 'Please write a short description!' }]}
          >
            <Input.TextArea rows={4} placeholder="Write a caption..." />
          </Form.Item>
          <Form.Item
            name="image"
          >
            <Input placeholder="image hyperlink" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Edit
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer />
    </Layout>
  );
}

export default EditPost;