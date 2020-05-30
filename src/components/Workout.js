import React from 'react';

function Workout({ workout }) {
    return (
        <table>
            <tbody>
                {workout.map((exerciseBlock, i) =>
                    <tr key={i}>
                        <td>{exerciseBlock.exercise.name}</td>
                        {exerciseBlock.reps.map((rep, j) =>
                            <td key={j}>{rep}</td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Workout;