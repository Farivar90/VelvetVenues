import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import useUserSearch from './useUserSearch';
import './Search.css';

function SearchUser() {
    const currentUser = useSelector(state => state.session.user);
    const [searchResults, searchTerm, setSearchTerm] = useUserSearch();

    if (!currentUser) {
        return <Redirect to={`/`} />;
    }

    return (
        <div className="search">
            <h1 className="search-h1">Search by username or full name</h1>
            <input
                className='search-input'
                type="text"
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                placeholder="Search by username or full name"
            />
            <div className="user-profile-boxes">
                {searchResults.length > 0 ? (
                    searchResults.map(user => (
                        <div className="user-profile-box" key={user.id}>
                            <Link to={`/users/${user.id}`} className="profile-box">
                                <div className="user-image">
                                    <img src={user?.imageUrl || '/resfiles/default-profile-image.png'} alt={`Profile of ${user.username}`} />
                                </div>
                                <div>
                                    <p className='search-res'><strong>Username: </strong>{user.username}</p>
                                    <p className='search-res'><strong>Full Name: </strong>{user.fullName}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : searchTerm ? (
                    <p className='search-not-exist'>Result not exist.</p>
                ) : null}
            </div>
        </div>
    );
}

export default SearchUser;
