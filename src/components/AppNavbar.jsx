import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { PiTShirtDuotone } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineBorderColor } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import shoplogo from '../images/shoplogo.png'; 


export default function AppNavbar() {
    return (
        <Navbar expand="lg" className="nav">
            <Container className="container-navbar">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={shoplogo}
                        width="90"
                        height="20"
                        className="d-inline-block"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/"><PiTShirtDuotone /> Products</Nav.Link>
                        <Nav.Link as={NavLink} to="/"><RiLoginBoxLine /> Login</Nav.Link>
                    </Nav>                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
