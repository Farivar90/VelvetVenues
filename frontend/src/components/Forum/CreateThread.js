// CreateThread.js

import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import csrfFetch from '../../store/csrf';

function CreateThread() {
    const { categoryId } = useParams();
    const [newThreadTitle, setNewThreadTitle] = useState('');
    const [error, setError] = useState(null);
    const currentUser = useSelector(state => state.session.user);

    const handleCreateThread = async () => {
        try {
            const response = await csrfFetch(`/api/forum_categories/${categoryId}/forum_threads`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    forum_thread: {
                        title: newThreadTitle
                    }
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create thread');
            }

            window.location.href = `/forum/${categoryId}`;
        } catch (err) {
            setError('Unable to create thread. Please try again later.');
        }
    };

    if (!currentUser) {
        return <Redirect to={`/`} />;
    }

    return (
        <div className="create-thread-page">
            <h2>Create New Thread</h2>
            <div className="create-thread-form">
                <input 
                    type="text" 
                    value={newThreadTitle} 
                    onChange={e => setNewThreadTitle(e.target.value)} 
                    placeholder="Enter thread title" 
                />
                <button onClick={handleCreateThread}>Create Thread</button>
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default CreateThread;
