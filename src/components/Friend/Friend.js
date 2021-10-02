import React from 'react';

const Friend = (props) => {
    const { name, phone, website, address } = props.friend;
    const friendStyle = {
        border: '3px solid goldenrod',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={friendStyle}>
            <h1>I am :{name}</h1>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p>I live in: {address.city}</p>
        </div>
    );
};

export default Friend;