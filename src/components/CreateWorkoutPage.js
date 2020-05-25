import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CreateWorkoutTab as Action } from '../redux/actionTypes';

import CreateWorkoutTab from './CreateWorkoutTab';

function CreateWorkoutPage({ openTab }) {
    useEffect(() => {
        openTab();
    }, [openTab]);

    return (
        <div>
            <h1>Create Workout Page</h1>
            <CreateWorkoutTab />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    openTab: () => dispatch(Action.open())
});

export default connect(null, mapDispatchToProps)(CreateWorkoutPage);