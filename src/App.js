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

import AdminRoute from './modules/AdminRoute';
import ProtectedRoute from './modules/ProtectedRoute';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import Navbar from './components/Navbar';
import RegistrationPage from './components/RegistrationPage';
import UserSettingsPage from './components/UserSettingsPage';
import UserWorkoutsPage from './components/UserWorkoutsPage';

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
              <Redirect exact from="/" to="/home" />
              <Route
                exact path="/home"
                component={HomePage}
              />
              <Route
                exact path="/login"
                component={LoginPage}
              />
              <Route
                exact path="/logout"
                component={LogoutPage}
              />
              <AdminRoute
                exact path="/register"
                component={RegistrationPage}
              />
              <ProtectedRoute
                exact path="/user/workouts"
                component={UserWorkoutsPage}
              />
              <ProtectedRoute
                exact path="/user/settings"
                component={UserSettingsPage}
              />
              <Route render={() => <h1>404: Not Found</h1>} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default connect()(App);
