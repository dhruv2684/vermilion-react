import React from 'react'
import { Button,  Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../img/skool-logo-9DCF3E49B3-seeklogo.com.png'
import { LuChevronsUpDown } from "react-icons/lu";


const Header = () => {
    return (
        <div>
            {/* hdr  */}
            <Navbar expand="lg" className='bg-white shadow' fixed="top" >
                <Container  className=' '>
                    <Navbar.Brand href="/" className='me-0 logo-box'><img src={logo}  alt="" /><LuChevronsUpDown className='ms-3 up-down' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="">
                            <Button href="/user" className='login-btn mt-md-0 mt-3'>LOG IN</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header