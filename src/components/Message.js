import React from "react";
import ReactEmoji from 'react-emoji';
const Message = ({ message: { user, text }, username }) => {
  let isSendByCurrentUser = false;
//   const trimedNamed = username.trime().toLowerCase();

  // check if message send by current user

  if (user === username) {
    isSendByCurrentUser = true;
  }

  return (
    isSendByCurrentUser ? (
  <div className="message_box_conatiner right">
     <div className="current_user">
         <p>{ReactEmoji.emojify(text)}</p>
     </div>
  </div>
  ) : (
  <div className="message_box_conatiner left">
      <div className="other_user">
         <p>{ReactEmoji.emojify(text)}</p>
     </div>
  </div>
  )
  )
};

export default Message;
