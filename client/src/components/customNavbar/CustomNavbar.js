import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand className="navbrand" href="./">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown className="nav-title" title="Orders" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Order Dashboard</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Order History</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Store" id="basic-nav-dropdown">
                    <NavDropdown.Item href="./inventory">Inventory</NavDropdown.Item>
                    <NavDropdown.Item href="./category">Categories</NavDropdown.Item>
                    <NavDropdown.Item href="./item">Items</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="./settings">Settings</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
} 