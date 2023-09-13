import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import csrfFetch from '../../store/csrf';
import { fetchMessages } from '../../store/messages';
import useUserSearch from '../Search/useUserSearch';
import './Conversation.css';

function NewConversation({ groupedMessages }) {
    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [selectedUser, setSelectedUser] = useState(null);
    const [messageContent, setMessageContent] = useState('');
    const [searchResults, searchTerm, setSearchTerm, setSearchResults] = useUserSearch();

    const handleSendMessage = async () => {
        if (!selectedUser || !messageContent) return;
        if (groupedMessages?.[selectedUser?.id]) {
            // Redirect to the existing conversation
            history.push(`/conversation/${selectedUser.username}/${selectedUser.id}`);
            return;
        }

        try {
            await csrfFetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sender_id: currentUser,
                    receiver_id: selectedUser.id, // Use selected user's ID
                    content: messageContent
                })
            });

            setMessageContent('');
            dispatch(fetchMessages());
            // Redirect to the specific conversation format you mentioned
            history.push(`/conversation/${selectedUser.username}/${selectedUser.id}`);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    

    if (!currentUser) {
        return <Redirect to={`/`} />;
    }

    return (
        <div className="conversation-container">
            <h2 className="conversation-title">Start a New Conversation</h2>

            <div className="search-section">
                <input
                    className='search-input-nc'
                    type="text"
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                    placeholder="Search by username or full name"
                />

                <div className="user-profile-boxes">
                    {searchResults.map(user => (
                        <div  className="user-profile-box" 
                            key={user.id}
                            onClick={() => {
                                setSelectedUser(user);
                                setSearchTerm('');
                            }}>                         
                            <div>
                                <p className='search-res'><strong>Username: </strong>{user.username}</p>
                                <p className='search-res'><strong>Full Name: </strong>{user.fullName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedUser && (
                <div className="message-input-area">
                    {/* Display the selected user's information above the textarea */}
                    <h4 className="selected-username">To: {selectedUser.username}</h4>
                    <textarea
                        className="message-textarea"
                        placeholder="Write your message here..."
                        value={messageContent}
                        onChange={(e) => setMessageContent(e.target.value)}
                    />
                    <button className="send-button" onClick={handleSendMessage}>Send</button>
                </div>
            )}

            <button className="back-button" onClick={() => history.push(`/inbox`)}>Go back to inbox</button>
        </div>
    );
}

export default NewConversation;
