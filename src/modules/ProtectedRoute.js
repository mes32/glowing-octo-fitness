import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import LoginPage from '../components/LoginPage';

const ProtectedRoute = (props) => {
    const {
        component: ComponentToProtect,
        user,
        ...otherProps
    } = props;

    let ComponentToShow;
    if (user) {
        ComponentToShow = ComponentToProtect;
    } else {
        ComponentToShow = LoginPage;
    }

    return <Route
        {...otherProps}
        component={ComponentToShow}
    />;
}

const mapStateToProps = (state) => ({
    user: state.userAccount
});

export default connect(mapStateToProps)(ProtectedRoute);