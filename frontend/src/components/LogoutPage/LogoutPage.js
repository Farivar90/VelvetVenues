import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom';
import './LogoutPage.css';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(sessionActions.logout());
    setTimeout(() => {
      history.push('/');
    }, 2000);
  }, [dispatch, history]);

  return (
    <div className='logout-message'>
      <h1>Logging out...</h1>
      <p>Thanks for visiting. See you soon!</p>
    </div>
  );
};

export default LogoutPage;
