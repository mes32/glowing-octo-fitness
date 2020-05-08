import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent(props) {
    const history = useHistory();

    const navigateTo = (url) => () => {
        history.push(url);
    }

    const toggleAuthentication = () => {
        if (props.user) {
            props.dispatch({ type: 'LOGOUT', payload: { history } });
        } else {
            history.push('/login');
        }
    }

    const authenticationButtonText = () => {
        if (props.user) {
            return 'Logout';
        } else {
            return 'Login';
        }
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand onClick={navigateTo('/home')}>Glowing Octo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={navigateTo('/user/workouts')}>Workouts</Nav.Link>
                    <Nav.Link onClick={navigateTo('/user/settings')}>Settings</Nav.Link>
                </Nav>
                <Form inline>
                    <Button onClick={toggleAuthentication} variant="outline-light">{authenticationButtonText()}</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(NavbarComponent);