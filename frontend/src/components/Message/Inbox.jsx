import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchMessages } from '../../store/messages';

function Inbox() {
  const currentUser = useSelector((state) => state.session.user);
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

//   console.log(messages)

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchMessages());
    }
  }, [currentUser, dispatch]);

  if (!currentUser) {
    return <Redirect to={`/`} />;
  }

  return (
    <div>
      <h1>Inbox</h1>
      <ul>
        {Object.values(messages).map((message) =>{
        //    console.log(message);
            return(
          <li key={message.id}>
            <p>From: {message.senderId}</p>
            <p>To: {message.receiverId}</p>
            <p>{message.content}</p>
          </li>
            );
        })}
      </ul>
    </div>
  );
}

export default Inbox;
