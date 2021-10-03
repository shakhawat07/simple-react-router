import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { id, title, body } = props.post;
    const history = useHistory();
    const handlePostDetailClick = () => {
        history.push(`/post/${id}`);
    };
    return (
        <div>
            <h1>Id: {id}</h1>
            <h1>Title: {title}</h1>
            <h2>Body: {body}</h2>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <br />
            <button onClick={handlePostDetailClick}>Post Detail</button>
        </div>
    );
};

export default Post;