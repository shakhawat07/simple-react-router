import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    // console.log(friendId);
    const history = useHistory();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);

    const handleClick = () => {
        history.push(`/friends`)
    }
    return (
        <div>
            <h1>Friend detail {friendId}</h1>
            <h2>{friend.name}</h2>
            <h3>{friend.phone}</h3>
            <h4>{friend.website}</h4>
            <h4>{friend.company?.name}</h4>
            <button onClick={handleClick}>See all friends</button>
        </div>
    );
};

export default FriendDetail;