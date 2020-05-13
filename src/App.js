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

import EditUserDetailsPage from './components/EditUserDetailsPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import ManageUsersPage from './components/ManageUsersPage';
import Navbar from './components/Navbar';
import RegistrationPage from './components/RegistrationPage';
import UserSettingsPage from './components/UserSettingsPage';
import UserWorkoutsPage from './components/UserWorkoutsPage';

import { UserAction } from './redux/actionTypes';

import './styles/App.css';

function App(props) {

  useEffect(() => {
    props.dispatch(UserAction.fetch());
  });

  return (
    <Router>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route
                exact path="/home"
                component={HomePage}
              />
              <AdminRoute
                exact path="/admin/register"
                component={RegistrationPage}
              />
              <AdminRoute
                exact path="/admin/user/:id/editDetails"
                component={EditUserDetailsPage}
              />
              <AdminRoute
                exact path="/admin/users"
                component={ManageUsersPage}
              />
              <Route
                exact path="/login"
                component={LoginPage}
              />
              <Route
                exact path="/logout"
                component={LogoutPage}
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
