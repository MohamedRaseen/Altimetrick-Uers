import { fork } from 'redux-saga/effects';
import {watchUserLogIn, watchUserSignUp} from './login.saga';

export default function* rootSaga () {
    yield fork(watchUserSignUp)
    yield fork(watchUserLogIn)
}