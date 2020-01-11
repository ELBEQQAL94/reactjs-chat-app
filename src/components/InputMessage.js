import React from "react";

const InputMessage = ({message, sendMessage, setMessage }) => (
  <form className="send_message">
    <input
      type="text"
      value={message}
      placeholder="Type message..."
      onKeyPress={e => (e.key === "Enter" ? sendMessage(e) : null)}
      onChange={e => setMessage(e.target.value)}
    />
    <button onClick={e => sendMessage(e)}>send</button>
  </form>
);

export default InputMessage;
