import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function CreateWorkoutTab({ isOpen }) {
    const history = useHistory();
    const navigateCreatePage = () => {
        history.push('/user/workouts/create');
    }

    const navigateBack = () => {
        history.goBack();
    }

    return (
        <div className="create-workout-tab">
            <div className="create-workout-tab-date">
                <Collapse in={isOpen}>
                    <h3>Workout for {moment().format('MMM D, YYYY')}</h3>
                </Collapse>
            </div>
            <div className="create-workout-tab-controls">
                <Collapse in={isOpen}>
                    <p>In form</p>
                </Collapse>
            </div>
            {isOpen ? 
                <span className="nav-buttons">
                    <Button onClick={navigateBack}>&lt; Back</Button>
                    <Button onClick={navigateBack} disabled={true}>Save Workout</Button>
                </span>
                :
                <span className="nav-buttons">
                    <Button onClick={navigateCreatePage}>Add Workout</Button>
                </span>
            }
        </div>
    );
}

const mapStateToProps = state => ({
    isOpen: state.workoutTabIsOpen
});

export default connect(mapStateToProps)(CreateWorkoutTab);