import React from 'react';
import { Link } from 'react-router-dom';

const JoinForm = ({
    username, 
    room, 
    handleChange
}) => {

    const checkData = (e, username, room) => {
        if(!username || !room){
            e.preventDefault()
        } else {
            return false
        };
    };


    return (
        <form>
            <input 
                type="text" 
                name="username" 
                placeholder="USERNAME" 
                value={username}
                onChange={e => handleChange(e)} />
            <input 
                type="text" 
                name="room" 
                placeholder="ROOM" 
                value={room}
                onChange={e => handleChange(e)} />
            <Link 
                onClick={(e) => checkData(e, username, room)} 
                to={`/chat?username=${username}&room=${room}`}>
                <button>sign in</button>
            </Link>
            
        </form>
    );
};

export default JoinForm;