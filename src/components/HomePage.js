import React from 'react';
import { connect } from 'react-redux';

function HomePage(props) {
    const displayName = () => {
        if (props.user.displayName) {
            return (<p>Welcome {props.user.displayName}</p>);
        } else if (props.user.username) {
            return (<p>Welcome {props.user.username}</p>);
        }
    };

    return (
        <div>
            <h1>Home Page</h1>
            {displayName()}
            <p>Fitness tracker</p>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(HomePage);