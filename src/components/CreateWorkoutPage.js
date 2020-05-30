import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CreateWorkoutTab as Action } from '../redux/actionTypes';

import CreateWorkoutTab from './CreateWorkoutTab';
import Workout from './Workout';

function CreateWorkoutPage({ openTab, workout }) {
    useEffect(() => {
        openTab();
    }, [openTab]);

    return (
        <div>
            <h1>Create Workout Page</h1>
            <Workout workout={workout} />
            <CreateWorkoutTab />
        </div>
    );
}

const mapStateToProps = state => ({
    workout: state.previewWorkout
})

const mapDispatchToProps = dispatch => ({
    openTab: () => dispatch(Action.open())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkoutPage);