import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

import { ExercisesAction } from '../redux/actionTypes';

function CreateWorkoutTab({ exercises, isOpen, fetchExercises }) {
    useEffect(() => {
        fetchExercises();
    }, [fetchExercises]);

    const [selectedExercise, setExercise] = useState(undefined);

    const history = useHistory();

    const navigateCreatePage = () => {
        history.push('/user/workouts/create');
    }

    const navigateBack = () => {
        history.goBack();
    }

    const selectDropdown = (exercise) => () => {
        setExercise(exercise);
    }

    const getSelectTitle = (exercise) => {
        if (exercise && exercise.name) {
            return exercise.name;
        }
        return '(select exercise)';
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
                    <Form>
                        <Form.Group>
                            <Form.Label>Exercise Name:</Form.Label>
                            <DropdownButton
                                title={getSelectTitle(selectedExercise)}
                                size="sm"
                                variant="outline-primary"
                            >
                                {exercises.map(exercise => 
                                    <Dropdown.Item onClick={selectDropdown(exercise)} key={exercise.id}>{exercise.name}</Dropdown.Item>
                                )}
                            </DropdownButton>
                        </Form.Group>
                    </Form>
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
    exercises: state.exercises,
    isOpen: state.workoutTabIsOpen
});

const mapDispatchToProps = dispatch => ({
    fetchExercises: () => dispatch(ExercisesAction.fetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkoutTab);