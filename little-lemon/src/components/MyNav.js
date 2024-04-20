import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon,
    MDBNavbarNav,
} from 'mdb-react-ui-kit';
import logo from '../images/littleLemonLogo.jpg';
import '../styles/MyNavbar.css';

export default function MyNav() {
    const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block"
                            alt="logo"
                        />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo02'
                        aria-controls='navbarTogglerDemo02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNavNoTogglerSecond}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>HOME</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>ABOUT</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>MENU</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    RESERVATION
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>ORDER ONLINE</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>LOGIN</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}