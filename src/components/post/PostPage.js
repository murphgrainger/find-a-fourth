import React from 'react';
import PostForm from './PostForm';
import './post.css'


class PostPage extends React.Component {
    render() {
        return (
          <div className="container">
            <h1>Post a Tee Time</h1>
            <PostForm />
          </div>
        );
    }
}

export default PostPage;
