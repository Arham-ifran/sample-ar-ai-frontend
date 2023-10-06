import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import { Images } from "../../assets/asset";
import { ENV } from "../../config/config";
import "./header.css";
export default function Header() {
    return (
        <>
            <header id='header'>
                <Container>
                    <div className='d-flex justify-content-center align-items-center top-quote align-items-center'>
                        <span>Experience The Future Of Conversational AI With {ENV?.appName}.</span>
                    </div>
                    <div className=''>
                        <Navbar expand='xl' className='justify-content-between p-0 align-items-center'>
                            <strong className='home-page-logo d-inline-block'>
                                <Link className='navbar-brand d-inline-block align-top' to='/'>
                                    <img className='logo-img' src={Images.companyLogo} alt='logo' />
                                </Link>
                            </strong>
                            <div className='d-flex align-items-center nav-content'>
                                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                                <Navbar.Collapse id='basic-navbar-nav' className=''>
                                    <div>
                                        <Nav className='mr-auto w-100'>
                                            <Nav.Link to='#home'>Product</Nav.Link>
                                            <Nav.Link to='#link'>Technology</Nav.Link>
                                            <Nav.Link to='#home'>Ethics</Nav.Link>
                                            <Nav.Link to='#link'>Pricing</Nav.Link>
                                            <Nav.Link to='#home'>Company</Nav.Link>
                                        </Nav>
                                    </div>
                                </Navbar.Collapse>
                                <div className='d-flex align-items-center'>
                                    <div className='user-holder me-2 mb-sm-0'>
                                        <Link to='/login' className='header-login-icon'><FontAwesomeIcon icon={faUser} /></Link>
                                    </div>
                                    <Link to='/' className='filled-btn mb-sm-0 hvr-shutter-in-horizontal'>Start Free Trial</Link>
                                </div>
                            </div>
                            {/* </Navbar.Collapse> */}
                        </Navbar>
                    </div>
                </Container>
            </header>   
        </>
    )
}
