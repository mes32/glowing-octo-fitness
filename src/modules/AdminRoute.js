import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

const AdminRoute = (props) => {
    const {
        component: ComponentToProtect,
        user,
        ...otherProps
    } = props;

    if (user && user.isAdmin) {
        return <Route
            {...otherProps}
            component={ComponentToProtect}
        />;
    } else {
        return <Route render={() => <h1>403: Forbidden</h1>} />;
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(AdminRoute);