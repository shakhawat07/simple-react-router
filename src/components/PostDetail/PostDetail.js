import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);
    return (
        <div>
            <h1>Post Detail: {postId}</h1>
            <h1>Post Title: {post.title}</h1>
            <h2>Post Body: {post.body}</h2>
        </div>
    );
};

export default PostDetail;