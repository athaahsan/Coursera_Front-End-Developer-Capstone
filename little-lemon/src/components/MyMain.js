import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../styles/MyMain.css';

export default function App() {
  return (
    <MDBContainer>
      <MDBRow around>
        <MDBCol size='12' md='5' className='d-flex align-items-center justify-content-center'>
          One of two columns
        </MDBCol>
        <MDBCol size='12' md='5' className='d-flex align-items-center justify-content-center'>
          One of two columns
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}