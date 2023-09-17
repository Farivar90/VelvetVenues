import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import csrfFetch from '../../store/csrf';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

function PostDetails() {
    const { categoryId, threadId, postId } = useParams();
    const [postDetails, setPostDetails] = useState(null);
    const currentUser = useSelector(state => state.session.user);
    
    useEffect(() => {
        const fetchPostDetails = async () => {
            const response = await csrfFetch(`/api/forum_categories/${categoryId}/forum_threads/${threadId}/forum_posts/${postId}`);
            const data = await response.json();
            setPostDetails(data);
        };
        fetchPostDetails();
    }, [categoryId, threadId, postId]);
    
    if (!currentUser) {
        return <Redirect to={`/`} />;
      }
    if (!postDetails) return null;

    return (
        <div className="post-details-container">
            <h2>Post Details</h2>
            <p>{postDetails.content}</p>
            <h3>Votes</h3>
            <ul>
                {postDetails.votes.map(vote => (
                    <li key={vote.id}>User {vote.user_id}: {vote.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostDetails;
