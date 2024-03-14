import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const TopNavbar = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Navbar.Brand href="#home">BrandName</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#forum">Forum</Nav.Link>

                </Nav>

                <Link to="/home">
                    <Button variant="outline-light">houses</Button>
                </Link>

                {/* horizontal space of 100% size */}
                <div style={{ width: '100%' }}></div>
                {/* elements aligned to the right */}
                <Link to="/">
                    <Button variant="outline-light">Login</Button>
                </Link>

                <div style={{ width: '10px' }}></div>


            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopNavbar;