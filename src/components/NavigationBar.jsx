import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
    return (
        <Navbar expand='lg' className='bg-primary w-100 fixed-top z-1'
            data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href="#" className="fs-4">João Vitor<span className='text-dark'>S.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto w-100 d-flex justify-content-end'>
                        <Nav.link href='#header'>Home</Nav.link>
                        <Nav.link href='#about'>About</Nav.link>
                        <Nav.link href='#projects'>Projects</Nav.link>
                        <Nav.link href='#contact'>Contact</Nav.link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
