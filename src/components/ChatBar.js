import React from "react";
import Online from '../online.png';

const ChatBar = ({room}) => (
  <div className="chat_bar">
    <div className="room_name">
      <img src={Online} alt="oline" />
      {room}
    </div>
    <div className="close_chat">
      <a href="/">X</a>
    </div>
  </div>
);

export default ChatBar;
