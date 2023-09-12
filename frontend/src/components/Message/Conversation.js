import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import csrfFetch from '../../store/csrf';
import './Conversation.css';

function Conversation() {
    const { userName, userId } = useParams();
    const currentUser = useSelector((state) => state.session.user);
    const messagesObject = useSelector((state) => state.messages.messages);
    const [messageContent, setMessageContent] = useState('');

    const allMessages = Object.values(messagesObject);
    const filteredMessages = allMessages.filter(
        message => (
            (message.senderId === currentUser && message.receiverName === userName) || 
            (message.receiverId === currentUser && message.senderName === userName)
        )
    );

    console.log(userId)

    const handleSendMessage = () => {
        csrfFetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sender_id: currentUser,
                receiver_id: parseInt(userId),
                content: messageContent
            })
        })
        .then(response => {
            setMessageContent(''); // Clear message after sending
            // You might want to refresh the messages or append to the existing list here
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    };

    return (
        <div className="conversation-container">
            <h2>Conversation with {userName}</h2>
            <ul>
                {filteredMessages.map((message) => (
                    <li key={message.id} className={message.senderId === currentUser ? "sent" : "received"}>
                        <p>{message.content}</p>
                    </li>
                ))}
            </ul>

            {/* Message input */}
            <div className="message-input-area">
                <textarea
                    placeholder="Write your message here..."
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                ></textarea>            
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Conversation;
