import React from 'react'

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.Post_Title}</h1>
      <p>{post.Post_Description}</p>
      <p>{post.Post_image}</p>
    </div>
  )
}

export default Post
