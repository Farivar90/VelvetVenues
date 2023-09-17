import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import csrfFetch from '../../store/csrf';
import './ForumPosts.css';

function ForumPosts() {
    const { categoryId, threadId } = useParams();
    const [posts, setPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');
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
                throw new Error('Failed to downvote post');
            }

            fetchPosts();
        } catch (err) {
            setError('Unable to downvote post. Please try again later.');
        }
    };

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

            setNewPostContent('');
            fetchPosts();

        } catch (err) {
            setError('Unable to create post. Please try again later.');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [categoryId, threadId]);

    if (!currentUser) {
        return <Redirect to={`/`} />;
    }

    return (
        <div >
            <h2 className="forum-title">Posts</h2>
            <div className="forum-posts-container">
            {error && <p className="error-message">{error}</p>}
            <ul className="forum-post-list">
                {posts.map(post => (
                    <li key={post.id} className="forum-post-item">
                        <div className="forum-post-header">
                            <h3 className="forum-post-user">{post.user}</h3>
                            {/* <div className="post-votes">
                                <button onClick={() => handleUpvote(post.id)}>Upvote</button>
                                <button onClick={() => handleDownvote(post.id)}>Downvote</button>
                            </div> */}
                        {/* <Link className="forum-post-content" to={`/forum/${categoryId}/forum_threads/${threadId}/${post.id}`}>
                            {post.content}
                        </Link> */}
                        {/* <div className="post-votes">
                            <span className="vote">Total Votes: {post.votes.total}</span>
                            <span className="upvote">Upvotes: {post.votes.upvotes}</span>
                            <span className="downvote">Downvotes: {post.votes.downvotes}</span>
                            <button onClick={() => handleUpvote(post.id)}>Upvote</button>
                            <button onClick={() => handleDownvote(post.id)}>Downvote</button>
                        </div> */}
                        </div>
                        <p className="forum-post-content">{post.content}</p>
                    </li>
                ))}
            </ul>
            <div className="create-post-section">
                    <textarea 
                        value={newPostContent} 
                        onChange={e => setNewPostContent(e.target.value)} 
                        placeholder="Enter post content"
                    />
                    <button onClick={handleCreatePost}>Create Post</button>
                    {error && <p className="error-message">{error}</p>}
                </div>
                <button onClick={() => window.location.href = `/forum/${categoryId}/`} className="back-to-threads">Back to Threads</button>
            </div>
        </div>
    );
}

export default ForumPosts;
