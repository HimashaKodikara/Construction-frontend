import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
    return (
        <header>
            <div className='container'>
                <Navbar expand="lg" >
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link">Sces</Nav.Link>
                            <Nav.Link href="#link">Project</Nav.Link>
                            <Nav.Link href="#link">Blogs</Nav.Link>
                            <Nav.Link href="#link">Contact Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>

        </header>
    )
}

export default Home
