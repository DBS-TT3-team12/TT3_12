import React from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd'
import { Col, Row } from 'antd'

const { Meta } = Card;

const Post = ({ post }) => {
  return (
    <div style={{ padding: 20 }}>
      <Row gutter={[8, 48]}>
        <Col span={8}></Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 600, borderRadius: "20px", overflow: "hidden" }}
            cover={<img alt="Unable to get image" src={post.Post_image} />}
          >
            <Meta title={post.Post_Title} description={post.Post_Description} />
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
}

export default Post
