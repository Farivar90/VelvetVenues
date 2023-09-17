import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import csrfFetch from '../../store/csrf';
import './ForumPosts.css';

function CreatePost() {
    const { categoryId, threadId } = useParams();
    const [newPostContent, setNewPostContent] = useState('');
    const [error, setError] = useState(null);
    const currentUser = useSelector(state => state.session.user);

    const handleCreatePost = async () => {
        try {
            const response = await csrfFetch(`/api/forum_categories/${categoryId}/forum_threads/${threadId}/forum_posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    forum_post: {
                        content: newPostContent
                    }
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            window.location.href = `/forum/${categoryId}/forum_threads/${threadId}`;
        } catch (err) {
            setError('Unable to create post. Please try again later.');
        }
    };

    if (!currentUser) {
        return <Redirect to={`/`} />;
    }

    return (
        <div className="create-post-page">
            <h2>Create New Post</h2>
            <textarea 
                value={newPostContent} 
                onChange={e => setNewPostContent(e.target.value)} 
                placeholder="Enter post content"
            />
            <button onClick={handleCreatePost}>Create Post</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default CreatePost;
