import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// components
import JoinForm from '../components/JoinForm';

const Join = () => {

    const [userInfo, setUserInfo] = useState({
        username: '',
        room: ''
    });

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        });
    };

    return (
        <section className="join">
           <div className="form_container">
               <h1>JOIN</h1>
               <JoinForm 
                    username={userInfo.username}
                    room={userInfo.room} 
                    handleChange={handleChange} 
                />
                <Link className="chat_now" to="/chat">Chat right now!</Link>
           </div>
        </section>
    );
};

export default Join;