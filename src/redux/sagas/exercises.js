import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
    ActionType,
    ExercisesAction
} from '../actionTypes';

function* fetchExercises() {
    try {
        const response = yield axios.get('api/exercise/all');
        yield put(ExercisesAction.set(response.data));
    } catch (error) {
        console.log('Get exercises request failed ', error);
    }
}

function* exerciseSaga() {
    yield takeLatest(ActionType.FETCH_EXERCISES, fetchExercises);
}

export default exerciseSaga;