import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function CreateWorkoutTab() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/user/workouts/create');
    }
    return (
        <div className="create-workout-tab">
            <Button onClick={handleClick} className="right">Add Workout</Button>
        </div>
    );
}

export default CreateWorkoutTab;