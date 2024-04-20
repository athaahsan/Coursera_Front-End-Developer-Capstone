import React, { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBRadio,
    MDBBtnGroup,
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import '../styles/MyMain.css';



export default function MyMain() {
    const [formValue, setFormValue] = useState({
        fname: '',
        lname: '',
        email: ''
    });

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };
    return (
        <MDBContainer className='main-container'>
            <MDBRow around>
                <MDBCol size='12' className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                    <MDBContainer className='mt-4 mb-4 p-3'>
                        <div className='d-flex flex-wrap align-items-center justify-content-center'>
                            <h4 style={{ fontWeight: 'bold' }}>
                                DATE
                            </h4>
                        </div>
                        <div>
                            <MDBBtnGroup className='d-flex flex-wrap align-items-center justify-content-center' style={{ boxShadow: 'none' }}>
                                <MDBRadio defaultChecked btn btnColor='light' id='btn-radio' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>S<br />11</span>} />
                                <MDBRadio btn btnColor='light' id='btn-radio2' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>M<br />12</span>} />
                                <MDBRadio btn btnColor='light' id='btn-radio3' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>T<br />13</span>} />
                                <MDBRadio btn btnColor='light' id='btn-radio4' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>W<br />14</span>} />
                                <MDBRadio btn btnColor='light' id='btn-radio5' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>T<br />15</span>} />
                                <MDBRadio btn btnColor='light' id='btn-radio6' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>F<br />16</span>} />
                                <MDBRadio btn btnColor='light' id='btn-radio7' name='options' wrapperClass='mx-2 my-2' wrapperTag='span' label={<span>S<br />17</span>} />
                            </MDBBtnGroup>
                        </div>
                    </MDBContainer>
                </MDBCol>

                <MDBCol size='12' className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                    <MDBContainer className='mt-4 mb-4 p-3'>
                        <div className='d-flex flex-wrap align-items-center justify-content-center'>
                            <h4 style={{ fontWeight: 'bold' }}>
                                TIME
                            </h4>
                        </div>
                        <div>
                            <MDBBtnGroup className='d-flex flex-wrap align-items-center justify-content-center' style={{ boxShadow: 'none' }}>
                                <MDBRadio defaultChecked btn btnColor='light' id='btn-radio8' name='options2' wrapperClass='mx-2 my-2' wrapperTag='span' label="07:00 - 10:00" />
                                <MDBRadio btn btnColor='light' id='btn-radio9' name='options2' wrapperClass='mx-2 my-2' wrapperTag='span' label="11:00 - 14:00" />
                                <MDBRadio btn btnColor='light' id='btn-radio10' name='options2' wrapperClass='mx-2 my-2' wrapperTag='span' label="17:00 - 21:00" />
                            </MDBBtnGroup>
                        </div>
                    </MDBContainer>
                </MDBCol>

                <MDBCol size='12' className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                    <MDBContainer className='mt-4 mb-4 p-3'>
                        <div className='d-flex flex-wrap align-items-center justify-content-center'>
                            <h4 style={{ fontWeight: 'bold' }}>
                                NUMBER OF PEOPLE
                            </h4>
                        </div>
                        <div>
                            <MDBBtnGroup className='d-flex flex-wrap align-items-center justify-content-center' style={{ boxShadow: 'none' }}>
                                <MDBRadio defaultChecked btn btnColor='light' id='btn-radio11' name='options3' wrapperClass='mx-2 my-2' wrapperTag='span' label="2" />
                                <MDBRadio btn btnColor='light' id='btn-radio12' name='options3' wrapperClass='mx-2 my-2' wrapperTag='span' label="4" />
                                <MDBRadio btn btnColor='light' id='btn-radio13' name='options3' wrapperClass='mx-2 my-2' wrapperTag='span' label="6" />
                                <MDBRadio btn btnColor='light' id='btn-radio14' name='options3' wrapperClass='mx-2 my-2' wrapperTag='span' label="8" />
                                <MDBRadio btn btnColor='light' id='btn-radio15' name='options3' wrapperClass='mx-2 my-2' wrapperTag='span' label="10" />
                            </MDBBtnGroup>
                        </div>
                    </MDBContainer>
                </MDBCol>

                <MDBCol size='12' className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                    <MDBContainer className='mt-4 mb-4 p-3'>
                        <div className='d-flex flex-wrap align-items-center justify-content-center'>
                            <h4 style={{ fontWeight: 'bold' }}>
                                SECTION
                            </h4>
                        </div>
                        <div>
                            <MDBBtnGroup className='d-flex flex-wrap align-items-center justify-content-center' style={{ boxShadow: 'none' }}>
                                <MDBRadio defaultChecked btn btnColor='light' id='btn-radio16' name='options4' wrapperClass='mx-2 my-2' wrapperTag='span' label="Indoor" />
                                <MDBRadio btn btnColor='light' id='btn-radio17' name='options4' wrapperClass='mx-2 my-2' wrapperTag='span' label="Outdoor" />
                            </MDBBtnGroup>
                        </div>
                    </MDBContainer>
                </MDBCol>

                <MDBCol size='12' className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                    <MDBContainer className='mt-4 mb-4 p-3'>
                        <MDBValidation className='row g-3'>
                            <MDBValidationItem feedback="Please enter your first name." invalid className='col-md-4'>
                                <MDBInput
                                    value={formValue.fname}
                                    name='fname'
                                    onChange={onChange}
                                    id='validationCustom01'
                                    required
                                    label='First name'
                                />
                            </MDBValidationItem>
                            <MDBValidationItem feedback="Please enter your last name." invalid className='col-md-4'>
                                <MDBInput
                                    value={formValue.lname}
                                    name='lname'
                                    onChange={onChange}
                                    id='validationCustom02'
                                    required
                                    label='Last name'
                                />
                            </MDBValidationItem>
                            <MDBValidationItem feedback="Please provide a valid email." invalid className='col-md-4'>
                                <MDBInput
                                    value={formValue.email}
                                    name='email'
                                    onChange={onChange}
                                    id='validationCustom03'
                                    required
                                    label='Email'
                                />
                            </MDBValidationItem>
                            <div className='col-12 text-center'>
                                <MDBBtn type='submit'>Submit</MDBBtn>
                            </div>
                        </MDBValidation>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}