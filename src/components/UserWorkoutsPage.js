import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CreateWorkoutTab as Action } from '../redux/actionTypes';

import CreateWorkoutTab from './CreateWorkoutTab';

function UserWorkoutsPage({ closeTab }) {
    useEffect(() => {
        closeTab();
    }, [closeTab]);

    return (
        <div>
            <h1>Workouts Page</h1>
            <CreateWorkoutTab />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    closeTab: () => dispatch(Action.close())
});

export default connect(null, mapDispatchToProps)(UserWorkoutsPage);