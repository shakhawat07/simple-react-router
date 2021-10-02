import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    // console.log(friendId);
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <h1>Friend detail {friendId}</h1>
            <h2>{friend.name}</h2>
            <h3>{friend.phone}</h3>
            <h4>{friend.website}</h4>
            <h4>{friend.company?.name}</h4>
        </div>
    );
};

export default FriendDetail;