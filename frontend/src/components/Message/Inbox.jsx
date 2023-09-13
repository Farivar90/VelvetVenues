import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useParams } from 'react-router-dom';
import { fetchMessages } from '../../store/messages';
import NewConversation from './NewConversation';
import './Inbox.css';

function Inbox() {
  const currentUser = useSelector((state) => state.session.user);
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
      if (currentUser) {
          dispatch(fetchMessages());
        }
    }, [currentUser, dispatch]);
    
    if (!currentUser) {
        return <Redirect to={`/`} />;
    }
    
    const groupedMessages = {};
    
    Object.values(messages).forEach(message => {
        const otherUserName = currentUser === message.senderId ? message.receiverName : message.senderName;
        const otherUserId = currentUser === message.senderId ? message.receiverId : message.senderId;
        
        if (groupedMessages[otherUserId]) {
            groupedMessages[otherUserId].messages.push(message);
        } else {
            groupedMessages[otherUserId] = {
                userName: otherUserName,
                messages: [message]
            };
        }
    });
    <NewConversation groupedMessages={groupedMessages} />
    
    return (
        <div className="inbox-container">
        <button className="new-conversation-button" onClick={() => window.location.href='/start-new-conversation'}>+</button>
        <h1 className="inbox-title">Your Messages</h1>
        <ul className="message-list">
            {Object.entries(groupedMessages).map(([userId, data]) => {
                const lastMessage = data.messages[data.messages.length - 1].content;

                return (
                    <li key={userId} className="message-item">
                        {/* <Link to={`/users/${userId}`} className="mun"> */}
                        {/* </Link> */}
                        <Link to={`/conversation/${data.userName}/${userId}`} className="message-link">
                            <h2 className="user-name">{data.userName}</h2>
                            <p className="last-message">Last Message: {lastMessage}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </div>
  );
}

export default Inbox;
