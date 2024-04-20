import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import '../styles/MyHeader.css';
import bgImage from '../images/restaurant.jpg';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

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