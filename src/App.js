import React from 'react';
import '../src/styles/App.scss';

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
// import { connect } from 'react-redux';

import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
