import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

const AdminRoute = (props) => {
    const {
        component: ComponentToProtect,
        user
    } = props;

    if (user && user.isAdmin) {
        return <Route
            exact path={props.path}
            component={ComponentToProtect}
        />;
    } else {
        return <Route render={() => <h1>403: Forbidden</h1>} />;
    }
}

const mapStateToProps = (state) => ({
    user: state.userAccount
});

export default connect(mapStateToProps)(AdminRoute);