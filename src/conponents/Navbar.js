import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navbar() {

    return (
        <>
            <Nav className="mt-3 ">
                <Nav.Item>
                    <Link to="/" className="nav-link font-weight-bold ">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/my-busy-slots" className="nav-link font-weight-bold">My-Busy-Slots</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/meeting-sent-list" className="nav-link font-weight-bold">Meetings Sent List</Link>
                </Nav.Item>
                
            </Nav>
            <hr />
        </>
    );
}

export default Navbar;