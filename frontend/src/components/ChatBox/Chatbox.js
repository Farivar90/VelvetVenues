// components/Chatbox.js

import React, { useState } from 'react';
import axios from 'axios';

const Chatbox = () => {
  const [message, setMessage] = useState('');
  const [replies, setReplies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/v1/chatbot/chat', { message });
    setReplies([...replies, { user: 'You', text: message }, { user: 'AI', text: response.data.reply }]);
    setMessage('');
  };

  return (
    <div>
      <div>
        {replies.map((reply, index) => (
          <div key={index}>
            <strong>{reply.user}: </strong>{reply.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbox;
