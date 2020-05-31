import React from 'react';

function Workout({ workout }) {
    return (
        <table>
            <tbody>
                {workout.map((exerciseBlock, i) =>
                    <tr key={i}>
                        <td>{exerciseBlock.exercise.name}</td>
                        <td>{exerciseBlock.reps.length > 0 &&
                            exerciseBlock.reps.length === 1 ?
                            '1 set'
                            :
                            exerciseBlock.reps.length + ' sets'}</td>
                        <td>{exerciseBlock.reps.join(', ')}</td>
                        <td>{exerciseBlock.reps.reduce((sum, num) => sum + num) + ' total'}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Workout;