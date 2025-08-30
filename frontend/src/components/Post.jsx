import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h3 className="post-author">{post.author}</h3>
      <p className="post-content">{post.content}</p>
      <div className="post-date">
        {new Date(post.createdAt).toLocaleString()}
      </div>
    </div>
  );
};

export default Post;