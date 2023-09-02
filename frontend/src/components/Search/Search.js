import React , { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SearchListings from './SearchListings';
import SearchUser from './SearchUser';

function Search(){
    const currentUser = useSelector(state => state.session.user);
    const [searchUser, setSearchUser] = useState(true);
    const dispatch = useDispatch();

    if (!currentUser) {
        return <Redirect to={`/`} />;
    }


    return(
        <div className="search-page">
            <div className="toggle-button">
                <button onClick={() => setSearchUser(!searchUser)}>
                    {searchUser ? "Search Properties" : "Search User"}
                </button>
            </div>
            <div className={`content ${searchUser ? 'user-visible' : 'list-visible'}`}>
                {searchUser ? <SearchUser /> : <SearchListings />}
            </div>
        </div>
    )
};
export default Search