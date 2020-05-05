import React from 'react';
import { connect } from 'react-redux';

function AboutPage(props) {
    return (
        <div>
            <h1>About Page</h1>
            {props.user && (<p>Welcome {props.user.display_name}</p>)}
            <p>Fitness tracker</p>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(AboutPage);