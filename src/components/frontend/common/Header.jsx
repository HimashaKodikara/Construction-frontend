import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    return (
        <header>
            <div className='container py-3'>
                <Navbar expand="lg" >
                    <Navbar.Brand href="/" className='logo'><span>UrbanEdge</span> Construction</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/service">Service</Nav.Link>
                            <Nav.Link href="/projects">Project</Nav.Link>
                           
                            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>

        </header>
    )
}

export default Header