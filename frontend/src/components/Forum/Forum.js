import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import ForumCategories from './ForumCategories';

function Forum(){
    const currentUser = useSelector(state => state.session.user);
    if (!currentUser) {
        return <Redirect to={`/`} />;
    }

    return(
        <div>
            <ForumCategories />
        </div>
    )
};
export default Forum