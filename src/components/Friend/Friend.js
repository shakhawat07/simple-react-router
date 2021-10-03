import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const history = useHistory();
    const friendStyle = {
        border: '3px solid goldenrod',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }
    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }
    const url = `/friend/${id}`
    return (
        <div style={friendStyle}>
            <h1>I am :{name}</h1>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p>I live in: {address.city}</p>
            <Link to={url}>Visit Me</Link>
            <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;