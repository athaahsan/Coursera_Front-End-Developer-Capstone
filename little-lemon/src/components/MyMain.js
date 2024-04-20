import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';
import '../styles/MyMain.css';

export default function App() {
    return (
        <MDBContainer className='main-container'>
            <MDBRow around>
                <MDBCol size='12' className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                    <MDBContainer className='mt-4 mb-4 p-3'>
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>
                                DATE
                            </h4>
                        </div>
                        <div>
                            <MDBBtnGroup className='d-flex flex-wrap align-items-center justify-content-start' style={{ boxShadow: 'none' }}>
                                <MDBRadio btn btnColor='secondary' id='btn-radio' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>S<br />11</span>} />
                                <MDBRadio btn btnColor='secondary' id='btn-radio2' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>M<br />12</span>} />
                                <MDBRadio btn btnColor='secondary' id='btn-radio3' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>T<br />13</span>} />
                                <MDBRadio btn btnColor='secondary' id='btn-radio4' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>W<br />14</span>} />
                                <MDBRadio btn btnColor='secondary' id='btn-radio5' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>T<br />15</span>} />
                                <MDBRadio btn btnColor='secondary' id='btn-radio6' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>F<br />16</span>} />
                                <MDBRadio btn btnColor='secondary' id='btn-radio7' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>S<br />17</span>} />
                            </MDBBtnGroup>
                        </div>
                    </MDBContainer>
                </MDBCol>

                <MDBCol size='12' className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                    <MDBContainer className='mt-4 mb-4 p-3'>
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>
                                TIME
                            </h4>
                        </div>
                        <div>
                            <MDBBtnGroup className='d-flex flex-wrap align-items-center justify-content-start' style={{ boxShadow: 'none' }}>
                                <MDBRadio btn btnColor='secondary' id='btn-radio8' name='options2' wrapperClass='mx-2 my-2' wrapperTag='span' label="07:00 - 10:00" />
                                <MDBRadio btn btnColor='secondary' id='btn-radio9' name='options2' wrapperClass='mx-2 my-2' wrapperTag='span' label="11:00 - 14:00" />
                                <MDBRadio btn btnColor='secondary' id='btn-radio10' name='options2' wrapperClass='mx-2 my-2' wrapperTag='span' label="17:00 - 21:00" />
                            </MDBBtnGroup>
                        </div>
                    </MDBContainer>
                </MDBCol>

                <MDBCol size='12' className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                    <MDBContainer className='mt-4 mb-4 p-3'>
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>
                                NUMBER OF PEOPLE
                            </h4>
                        </div>
                        <div>
                            <MDBBtnGroup className='d-flex flex-wrap align-items-center justify-content-start' style={{ boxShadow: 'none' }}>
                                <MDBRadio btn btnColor='secondary' id='btn-radio11' name='options3' wrapperClass='mx-2 my-2' wrapperTag='span' label="2" />
                                <MDBRadio btn btnColor='secondary' id='btn-radio12' name='options3' wrapperClass='mx-2 my-2' wrapperTag='span' label="4" />
                                <MDBRadio btn btnColor='secondary' id='btn-radio13' name='options3' wrapperClass='mx-2 my-2' wrapperTag='span' label="6" />
                                <MDBRadio btn btnColor='secondary' id='btn-radio14' name='options3' wrapperClass='mx-2 my-2' wrapperTag='span' label="8" />
                                <MDBRadio btn btnColor='secondary' id='btn-radio15' name='options3' wrapperClass='mx-2 my-2' wrapperTag='span' label="10" />
                            </MDBBtnGroup>
                        </div>
                    </MDBContainer>
                </MDBCol>

                <MDBCol size='12' className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                    <MDBContainer className='mt-4 mb-4 p-3'>
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>
                                SECTION
                            </h4>
                        </div>
                        <div>
                            <MDBBtnGroup className='d-flex flex-wrap align-items-center justify-content-start' style={{ boxShadow: 'none' }}>
                                <MDBRadio btn btnColor='secondary' id='btn-radio16' name='options4' wrapperClass='mx-2 my-2' wrapperTag='span' label="Indoor" />
                                <MDBRadio btn btnColor='secondary' id='btn-radio17' name='options4' wrapperClass='mx-2 my-2' wrapperTag='span' label="Outdoor" />
                            </MDBBtnGroup>
                        </div>
                    </MDBContainer>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}