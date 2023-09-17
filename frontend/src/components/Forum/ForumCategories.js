import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import csrfFetch from '../../store/csrf';
import { useSelector } from 'react-redux';
import './ForumCategories.css';

function ForumCategories() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const currentUser = useSelector(state => state.session.user);

    const fetchCategories = async () => {
        try {
            const response = await csrfFetch('/api/forum_categories');
            const data = await response.json();
            setCategories(data);
        } catch (err) {
            setError('Unable to fetch forum categories. Please try again later.');
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    if (!currentUser) {
        return <Redirect to={`/`} />;
    }

    return (
        <div className="forum-categories-container">
            <h2 className="forum-title">Forum Categories</h2>
            {error && <p className="error-message">{error}</p>}
            <ul className="forum-category-list">
                {categories.map(category => (
                    <li key={category.id} className="forum-category-item">
                        <Link className="forum-category-link" to={`/forum/${category.id}/`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ForumCategories;
