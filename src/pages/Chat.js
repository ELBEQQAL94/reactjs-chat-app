import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';

// components
import ChatBar from '../components/ChatBar';
import InputMessage from '../components/InputMessage';
import Message from '../components/Message';
import WelcomeAlert from '../components/WelcomeAlert';

// const SERVER_URL = 'localhost:8080';
const SERVER_URL = 'https://chat-app-react-app.herokuapp.com/';
let socket;

const Chat = ({ location }) => {

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    console.log('messages:', messages);

    // handler user joined to the room
    useEffect(() => {
        
        // catch query username and room from URL
        const { username, room } = queryString.parse(location.search);

        // Init socket.io-client
        socket = io(SERVER_URL);
        setUsername(username);
        setRoom(room);

        socket.emit('join', { username, room}, () => {
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
            console.log('User left the room');
        };

    }, [SERVER_URL, location.search]);

    // handle message from user
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    // create function for send messages
    const sendMessage = (e) => {

        e.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => {
                setMessage('');
            });
        };

    };

    return (
        <section className="chat">
            <div className="chat_container">
                <ChatBar room={room} />
                <ScrollToBottom className="chat_box">
                    {
                        messages.map((message, index) => (
                            index === 0 ? <WelcomeAlert message={message}/> 
                                :<Message 
                                key={index} 
                                message={message}
                                username={username}
                            />
                        ))
                    }
                </ScrollToBottom>
                <InputMessage 
                    message={message} 
                    sendMessage={sendMessage} 
                    setMessage={setMessage} 
                />
                
            </div>
        </section>
    );
};

export default Chat;