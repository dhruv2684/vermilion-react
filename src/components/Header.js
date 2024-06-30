import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../img/skool-logo-9DCF3E49B3-seeklogo.com.png'
import { LuChevronsUpDown } from "react-icons/lu";


const Header = () => {
    return (
        <div>
            {/* hdr  */}
            <Navbar expand="lg" className="bg-body-tertiary shadow mb-5" fixed="top">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} width="30%" alt="" /><LuChevronsUpDown className='ms-3 up-down' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href='/user' >
                                <a className='login-btn '>LOG IN</a>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header