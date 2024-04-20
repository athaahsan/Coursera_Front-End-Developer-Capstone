import React from 'react';
import '../styles/MyHeader.css';
import bgImage from '../images/restaurant.jpg';

export default function MyHeader() {

  return (
    <header>

      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Reserve Your Table Now</h1>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}