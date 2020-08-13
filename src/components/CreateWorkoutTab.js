import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

import { ExercisesAction, WorkoutPreviewAction } from '../redux/actionTypes';

function CreateWorkoutTab({ appendExercise, exercises, isOpen, fetchExercises, workout, incrementReps, decrementReps }) {
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
        appendExercise(exercise);
    }

    const getSelectTitle = (exercise) => {
        if (exercise && exercise.name) {
            return exercise.name;
        }
        return '(select exercise)';
    }

    const decrement = (i, j) => {
        console.log(i + ' ' + j);
        decrementReps(i, j);
    }

    const increment = (i, j) => {
        console.log(i + ' ' + j);
        incrementReps(i, j);
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
                    <>
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
                    <table>
                        {workout.map((workoutBlock, i) =>
                            <tbody key={i}>
                                {workoutBlock.reps.map((rep, j) =>
                                    <tr key={j}>
                                        <td>{j === 0 && workoutBlock.exercise.name}</td>
                                        <td>{'set ' + (j + 1)}</td>
                                        <td>{rep + ' reps'}</td>
                                        <td>
                                            <Button onClick={() => decrement(i, j)} variant="secondary" size="sm">-</Button>
                                            <Button onClick={() => increment(i, j)} variant="secondary" size="sm">+</Button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        )}
                    </table>
                    </>
                </Collapse>
            </div>
            {isOpen ? 
                <span className="nav-buttons">
                    <Button onClick={navigateBack}>&lt; Back</Button>
                    <Button onClick={navigateBack} disabled={workout.length === 0 || workout[0].reps[0] === 0}>Save Workout</Button>
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
    isOpen: state.workoutTabIsOpen,
    workout: state.workoutPreview
});

const mapDispatchToProps = dispatch => ({
    fetchExercises: () => dispatch(ExercisesAction.fetch()),
    appendExercise: (exercise) => dispatch(WorkoutPreviewAction.appendExercise(exercise)),
    incrementReps: (blockIndex, repsIndex) => dispatch(WorkoutPreviewAction.incrementReps(blockIndex, repsIndex)),
    decrementReps: (blockIndex, repsIndex) => dispatch(WorkoutPreviewAction.decrementReps(blockIndex, repsIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkoutTab);