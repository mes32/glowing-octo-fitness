import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import Navbar from './components/Navbar';
import RegistrationPage from './components/RegistrationPage';

function App(props) {

  useEffect(() => {
    props.dispatch({ type: 'FETCH_USER' });
  });

  return (
    <Router>
      <Navbar />
      <Container>
        <Row>
          <Col xs={4}>
            <Switch>
              <Redirect exact from="/" to="/about" />
              <Route
                exact path="/about"
                component={AboutPage}
              />
              <Route
                exact path="/login"
                component={LoginPage}
              />
              <Route
                exact path="/logout"
                component={LogoutPage}
              />
              <Route
                exact path="/register"
                component={RegistrationPage}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default connect()(App);
