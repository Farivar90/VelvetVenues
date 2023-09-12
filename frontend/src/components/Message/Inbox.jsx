import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useParams } from 'react-router-dom';
import { fetchMessages } from '../../store/messages';
import './Inbox.css';

function Inbox() {
  const currentUser = useSelector((state) => state.session.user);
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
//   const { userId } = useParams();

  useEffect(() => {
      if (currentUser) {
          dispatch(fetchMessages());
      }
  }, [currentUser, dispatch]);

  if (!currentUser) {
    return <Redirect to={`/`} />;
  }

  // Group messages by user
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

  console.log(groupedMessages)

  return (
    <div>
      <h1>Inbox</h1>
      <ul>
  {Object.entries(groupedMessages).map(([userId, data]) => {
    const lastMessage = data.messages && data.messages.length > 0 ? data.messages[data.messages.length - 1].content : 'No messages';

    return (
      <li key={userId}>
        <Link to={`/conversation/${data.userName}/${userId}`}>
          <h2>{data.userName}</h2>
          <p>Last Message: {lastMessage}</p>
        </Link>
      </li>
    );
  })}
</ul>

    </div>
  );
}

export default Inbox;
