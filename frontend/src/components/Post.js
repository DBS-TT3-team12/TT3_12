import React from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd'
import { Col, Row } from 'antd'
import { LikeOutlined, EditOutlined, DeleteOutlined, CommentOutlined } from '@ant-design/icons';


const { Meta } = Card;

const Post = ({ post, handleLike, handleComment, handleEdit, handleDelete }) => {
  return (
    <div style={{ padding: 20 }}>
      <Row gutter={[8, 48]}>
        <Col span={8}></Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 600, borderRadius: "20px", overflow: "hidden" }}
            cover={<img alt="Unable to get image" src={post.Post_image} />}
            actions={[
              // stopPropagation is used to prevent onClick being called on the card itself
              <LikeOutlined key="like" onClick={(e) => { e.stopPropagation(); console.log("Liked!") }} />,
              <CommentOutlined key="comment" onClick={(e) => { e.stopPropagation(); console.log("Add Comment!") }} />,
              <EditOutlined key="edit" onClick={(e) => { e.stopPropagation(); console.log("Edit!") }} />,
              <DeleteOutlined key="delete" onClick={(e) => { e.stopPropagation(); console.log("Delete!") }} />,
            ]}
            onClick={() => console.log("Clicked card!")}
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
