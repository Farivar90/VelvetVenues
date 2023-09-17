import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import csrfFetch from '../../store/csrf';
import './ForumPosts.css';

function ForumPosts() {
    const { categoryId, threadId } = useParams();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const currentUser = useSelector(state => state.session.user);

    const fetchPosts = async () => {
        try {
            const response = await csrfFetch(`/api/forum_categories/${categoryId}/forum_threads/${threadId}/forum_posts`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }

            const data = await response.json();
            setPosts(Object.values(data));
        } catch (err) {
            setError('Unable to fetch posts. Please try again later.');
        }
    };

    const handleUpvote = async (postId) => {
        try {
            const response = await csrfFetch(`/api/forum_categories/${categoryId}/forum_threads/${threadId}/forum_posts/${postId}/votes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    vote: {
                        value: 1
                    }
                })
            });

            if (!response.ok) {
                throw new Error('Failed to upvote post');
            }

            fetchPosts();
        } catch (err) {
            setError('Unable to upvote post. Please try again later.');
        }
    };

    const handleDownvote = async (postId) => {
        try {
            const response = await csrfFetch(`/api/forum_categories/${categoryId}/forum_threads/${threadId}/forum_posts/${postId}/votes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    vote: {
                        value: -1 
                    }
                })
            });

            if (!response.ok) {
                throw new Error('Failed to upvote post');
            }

            fetchPosts();
        } catch (err) {
            setError('Unable to upvote post. Please try again later.');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [categoryId, threadId]);

    if (!currentUser) {
        return <Redirect to={`/`} />;
    }

    return (
        <div className="forum-posts-container">
            <h2 className="forum-title">Posts</h2>
            {error && <p className="error-message">{error}</p>}
            <ul className="forum-post-list">
                {posts.map(post => (
                    <li key={post.id} className="forum-post-item">
                        <h3 className="forum-post-user">{post.user}</h3>
                        <Link className="forum-post-content" to={`/forum/${categoryId}/forum_threads/${threadId}/${post.id}`}>
                            {post.content}
                        </Link>
                        <div className="post-votes">
                            <span className="vote">Total Votes: {post.votes.total}</span>
                            <span className="upvote">Upvotes: {post.votes.upvotes}</span>
                            <span className="downvote">Downvotes: {post.votes.downvotes}</span>
                            <button onClick={() => handleUpvote(post.id)}>Upvote</button>
                            <button onClick={() => handleDownvote(post.id)}>Downvote</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to={`/forum/${categoryId}/forum_threads/${threadId}/new`}>Create New Post</Link>
        </div>
    );
}

export default ForumPosts;
