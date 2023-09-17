import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import csrfFetch from '../../store/csrf';
import './ForumThreads.css';
function ForumThreads() {
    const { categoryId } = useParams();
    const [threads, setThreads] = useState([]);
    const [error, setError] = useState(null);
    const currentUser = useSelector(state => state.session.user);

    const fetchThreads = async () => {
        try {
            const response = await csrfFetch(`/api/forum_categories/${categoryId}/forum_threads`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch threads');
            }

            const data = await response.json();
            setThreads(data);
        } catch (err) {
            setError('Unable to fetch threads. Please try again later.');
        }
    };

    useEffect(() => {
        fetchThreads();
    }, [categoryId]);

    if (!currentUser) {
        return <Redirect to={`/`} />;
    }

    return (
        <div>
            <h2 className="forum-title">Threads</h2>
        <div className="forum-threads-container">
            <Link to={`/forum/${categoryId}/forum_threads_new`}>Create New Thread</Link>
            {error && <p className="error-message">{error}</p>}
            <ul className="forum-thread-list">
                {threads.map(thread => (
                <li key={thread.id} className="forum-thread-item">
                    <Link className="forum-thread-link" to={`/forum/${categoryId}/forum_threads/${thread.id}/`}>
                        {thread.title}
                    </Link>
                    <div className="thread-details">
                        Created by {thread.user_id} on {new Date(thread.created_at).toLocaleDateString()}
                    </div>
                </li>                
                ))}
            </ul>
            <button onClick={() => window.location.href = `/forum`} className="back-to-forum">Back to Forum</button>
            </div>
        </div>
    );
}

export default ForumThreads;
