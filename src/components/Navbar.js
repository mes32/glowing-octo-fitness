import React from 'react';
import { useHistory } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
    const history = useHistory();

    const handleClick = (target) => {
        history.push(target);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={() => handleClick('/home')}>Glowing Octo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => handleClick('/user/workouts')}>Workouts</Nav.Link>
                <Nav.Link onClick={() => handleClick('/user/settings')}>Settings</Nav.Link>
                <Nav.Link onClick={() => handleClick('/login')}>Login</Nav.Link>
                <Nav.Link onClick={() => handleClick('/logout')}>Logout</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarComponent;