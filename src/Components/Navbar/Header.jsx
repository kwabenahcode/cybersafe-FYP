import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {
    const isAuthenticated = !!localStorage.getItem('authToken'); // Check if user is authenticated
    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('authToken');  // Clear the token
        localStorage.removeItem('refreshToken');  // Clear the refresh token if stored
        navigate('/login');  // Redirect to login page after logout
    };

    return (
        <Navbar expand="lg" className="m-3">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand className='logo-text m-2'>CyberSafe</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link className='nav_text m-2'>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/courses'>
                            <Nav.Link className='nav_text m-2'>Courses</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/resources'>
                            <Nav.Link className='nav_text m-2'>Resources</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/tips'>
                            <Nav.Link className='nav_text m-2'>Tips</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        {!isAuthenticated ? (
                            <>
                                <LinkContainer to='/login'>
                                    <Nav.Link className='login_btn' xs="auto">Log in</Nav.Link>
                                </LinkContainer>
                                <Col xs="auto">
                                    <LinkContainer to='/signup'>
                                        <Button type="submit" className='sign_up_btn'>Sign up</Button>
                                    </LinkContainer>
                                </Col>
                            </>
                        ) : (
                          
                            <Button className='login_btn' onClick={handleLogout}>Logout</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
