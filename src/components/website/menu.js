import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

// Navbar is created using bootstrap..
class AppMenu extends Component {

    render() {

        return (
            <Navbar bg="primary" expand="xl" sticky="top">
                <Navbar.Brand style={{ color: '#ffff00' }}>Dr. Gyana Ranjan Tripathy   </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey="/" className="navbar navbar-light">
                        <Nav.Link eventKey="/">
                            <Nav.Item> <NavLink to="/" exact={true} activeStyle={{ color: 'lightgreen' }} style={{ color: 'white' }}>Home</NavLink></Nav.Item>
                        </Nav.Link>
                        <Nav.Link eventKey="/aboutme">
                            <Nav.Item> <NavLink to="/aboutme" activeStyle={{ color: 'lightgreen' }} style={{ color: 'white' }}>About me</NavLink></Nav.Item>
                        </Nav.Link>
                        <Nav.Link eventKey="/people">
                            <Nav.Item> <NavLink to="/people" activeStyle={{ color: 'lightgreen' }} style={{ color: 'white' }}>People</NavLink></Nav.Item>
                        </Nav.Link>
                        <Nav.Link eventKey="/research">
                            <Nav.Item> <NavLink to="/research" activeStyle={{ color: 'lightgreen' }} style={{ color: 'white' }}>Research</NavLink></Nav.Item>
                        </Nav.Link>
                        <Nav.Link eventKey="/facilities">
                            <Nav.Item> <NavLink to="/facilities" activeStyle={{ color: 'lightgreen' }} style={{ color: 'white' }}>Facilities</NavLink></Nav.Item>
                        </Nav.Link>
                        <Nav.Link eventKey="/publications">
                            <Nav.Item> <NavLink to="/publications" activeStyle={{ color: 'lightgreen' }} style={{ color: 'white' }}>Publications</NavLink></Nav.Item>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }

}

export default AppMenu;