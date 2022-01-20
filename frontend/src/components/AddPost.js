import { useState } from "react";
import { Layout, Form, Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { addPost } from "./api";
import { useAuthState } from "../context/context";

const { Header, Content, Footer } = Layout;

function AddPost() {
  const navigate = useNavigate();
  const auth = useAuthState();

  const onFinish = (values) => {
    addPost(auth.token, values).then((result) => {
      if (result) {
        navigate("/");
      } else {
        console.error("Error: addPost");
      }
    });
  };

  const handleBack = async (e) => {
    navigate("/");
  };

  return (
    <Layout className="layout">
      <Header>
        <Button type="primary" onClick={handleBack}>
          Back
        </Button>
        <h1>Tweeter</h1>
        <p> </p>
      </Header>
      <Content style={{ padding: "50px" }}>
        <h2>Add new post:</h2>
        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
          <Form.Item name="title" rules={[{ required: true, message: "Please give a title!" }]}>
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            name="desc"
            rules={[{ required: true, message: "Please write a short description!" }]}
          >
            <Input.TextArea rows={4} placeholder="Write a caption..." />
          </Form.Item>
          <Form.Item name="image">
            <Input placeholder="image hyperlink" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Post
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer />
    </Layout>
  );
}

export default AddPost;
