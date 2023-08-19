import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

function Search(){
    const currentUser = useSelector(state => state.session.user);
    if (!currentUser) {
        return <Redirect to={`/`} />;
      }
    return(
        <div>
            <h1>Search</h1><br/>
            <h1>Under Construction...</h1>
        </div>
    )
};
export default Search