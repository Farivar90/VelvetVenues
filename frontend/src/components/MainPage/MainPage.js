import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import Modal from 'react-modal';
import './MainPage.css';

import background1 from './BackgroundPic/b1.jpg';
import background2 from './BackgroundPic/b2.jpg';
import background3 from './BackgroundPic/b3.jpg';
import background4 from './BackgroundPic/b4.jpg';
import background5 from './BackgroundPic/b5.jpg';
import background6 from './BackgroundPic/b6.jpg';
import background7 from './BackgroundPic/b7.jpg';
import background8 from './BackgroundPic/b8.jpg';
import background9 from './BackgroundPic/b9.jpg';
import background10 from './BackgroundPic/b10.jpg';
import background11 from './BackgroundPic/b11.jpg';
import background12 from './BackgroundPic/b12.jpg';
import background13 from './BackgroundPic/b13.jpg';
import background14 from './BackgroundPic/b14.jpg';
import background15 from './BackgroundPic/b15.jpg';
import background16 from './BackgroundPic/b16.jpg';
import background17 from './BackgroundPic/b17.jpg';
import background18 from './BackgroundPic/b18.jpg';
import background19 from './BackgroundPic/b19.jpg';
import background20 from './BackgroundPic/b20.jpg';
import background21 from './BackgroundPic/b21.jpg';
import background22 from './BackgroundPic/b22.jpg';
import background23 from './BackgroundPic/b23.jpg';
import background24 from './BackgroundPic/b24.jpg';
import background25 from './BackgroundPic/b25.jpg';
import background26 from './BackgroundPic/b26.jpg';
import background27 from './BackgroundPic/b27.jpg';
import background28 from './BackgroundPic/b28.jpg';
import background29 from './BackgroundPic/b29.jpg';
import background30 from './BackgroundPic/b30.jpg';
import background31 from './BackgroundPic/b31.jpg';
import background32 from './BackgroundPic/b32.jpg';
import background33 from './BackgroundPic/b33.jpg';
import background34 from './BackgroundPic/b34.jpg';
import background35 from './BackgroundPic/b35.jpg';
import background36 from './BackgroundPic/b36.jpg';
import background37 from './BackgroundPic/b37.jpg';
import background38 from './BackgroundPic/b38.jpg';
import background39 from './BackgroundPic/b39.jpg';
import background40 from './BackgroundPic/b40.jpg';
import background41 from './BackgroundPic/b41.jpg';
import background42 from './BackgroundPic/b42.jpg';
import background43 from './BackgroundPic/b43.jpg';
import background44 from './BackgroundPic/b44.jpg';

const backgroundImages = [background1, background2, background3, background4, background5, background6, background7, background8, background9, background10, background11, background12, background13, background14, background15, background16, background17, background18, background19, background20, background21, background22, background23, background24, background25, background26, background27, background28, background29, background30, background31, background32, background33, background34, background35, background36, background37, background38, background39, background40, background41, background42, background43, background44];

const IMAGES_PER_ROTATION = 5;

const MainPage = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [currentImageIndexes, setCurrentImageIndexes] = useState([]);
  const [rotationIndex, setRotationIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const currentUser = useSelector(state => state.session.user);
  const toggleForm = () => {
    setActiveForm(activeForm === 'login' ? 'registration' : 'login');
  };
  
  useEffect(() => {
    
    const interval = setInterval(() => {
      const start = rotationIndex * IMAGES_PER_ROTATION;
      const nextIndexes = Array.from({ length: IMAGES_PER_ROTATION }, (_, i) => (start + i) % backgroundImages.length);
      
      setCurrentImageIndexes(nextIndexes);
      setRotationIndex(prevIndex => (prevIndex + 1) % Math.ceil(backgroundImages.length / IMAGES_PER_ROTATION));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [ rotationIndex]);
  if (currentUser) return <Redirect to={`/users/${currentUser}`} />;
  
  return (
    <div>
    <img src="/resfiles/head.png" alt="headmain" className="headmain-image" />
      <h1 id= 'mainWelcome'>Welcome to VelvetVenues</h1>
      <h2 id= 'main-modal-opener' onClick={openModal} style={{ cursor: 'pointer' }}>Click here to "Discover Luxury, Your Way"</h2>
    
    <div className="main-content">
      {currentImageIndexes.map((imageIndex, index) => (
    <img
      key={index}
      src={backgroundImages[imageIndex]}
      alt={`background-${imageIndex}`}
      className="background-image"
    />
  ))}
  </div>

  <Modal id= "main-modal" isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Login Modal">
    <div className="background-overlay">
      <div className="form-container">
        <h2 id='rl-head'>{activeForm === 'login' ? 'Login' : 'Register'}</h2>
        {activeForm === 'login' ? <LoginForm /> : <RegistrationForm />}
        <div className="toggle-button-container">
          <button className='rl-button' onClick={toggleForm}>
            {activeForm === 'login' ? 'Don`t have an account? Please Register' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  </Modal>
</div>

  );
};

export default MainPage;
