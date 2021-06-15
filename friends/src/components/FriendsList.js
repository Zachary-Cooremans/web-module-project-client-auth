
import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function FriendsList(props) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then((res) => {
            console.log(res)
            setFriends(res.data)
        })
        .catch((err) => {
            console.log({ err })
        })
    }, [])

    return (
        <div>
            <h3>Current Friends</h3>
            {friends.map((friend) => (
                <>
                    <p key={friend.id}>{friend.name}</p>
                    <button>edit</button>
                </>
            ))}
        </div>
    )
}
