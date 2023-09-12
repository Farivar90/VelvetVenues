import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import csrfFetch from '../../store/csrf';
import { fetchMessages } from '../../store/messages';
import './Conversation.css';

function Conversation() {
    const { userName, userId } = useParams();
    const currentUser = useSelector((state) => state.session.user);
    const messagesObject = useSelector((state) => state.messages.messages);
    const [messageContent, setMessageContent] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const filteredMessages = Object.values(messagesObject).filter(
        message => (
            (message.senderId === currentUser && message.receiverName === userName) || 
            (message.receiverId === currentUser && message.senderName === userName)
        )
    );

    const handleSendMessage = async () => {
        try {
            await csrfFetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sender_id: currentUser,
                    receiver_id: parseInt(userId),
                    content: messageContent
                })
            });

            setMessageContent('');
            dispatch(fetchMessages());
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        if (currentUser) {
            dispatch(fetchMessages());
        }
    }, [currentUser, dispatch]);

    if (!currentUser) {
        return <Redirect to={`/`} />;
    }

    return (
        <div className="conversation-container">
            <h2 className="conversation-title">Conversation with {userName}</h2>
            <ul className="messages-list">
                {filteredMessages.map((message) => (
                    <li key={message.id} className={message.senderId === currentUser ? "sent-message" : "received-message"}>
                        <p>{message.content}</p>
                    </li>
                ))}
            </ul>

            <div className="message-input-area">
                <textarea
                    className="message-textarea"
                    placeholder="Write your message here..."
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                />
                <button className="send-button" onClick={handleSendMessage}>Send</button>
                <button className="back-button" onClick={() => history.push(`/inbox`)}>Go back to inbox</button>
            </div>
        </div>
    );
}

export default Conversation;
