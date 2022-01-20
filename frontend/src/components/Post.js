import React from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd'
import { Col } from 'antd'

const { Meta } = Card;

const Post = ({ post }) => {
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={post.Post_image} />}
      >
        <Meta title={post.Post_Title} description={post.Post_Description} />
      </Card>
    </Col>
  )
}

export default Post
