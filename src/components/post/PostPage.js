import React from 'react';
import PostForm from './PostForm';
import './post.css'


class PostPage extends React.Component {
    render() {
        return (
          <div className="container">
            <PostForm />
          </div>
        );
    }
}

export default PostPage;
