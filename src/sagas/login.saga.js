import { put, takeEvery, call} from 'redux-saga/effects';
import { GET_USER_LOGIN_ONSUBMIT, SERVER_HOST, SERVER_LOGIN_API, GET_USER_LOGIN_SUCCESS, SERVER_SIGNUP_API, GET_USER_SIGNUP_ONSUBMIT,GET_USER_LOGIN_FAILURE, GET_USER_SIGNUP_SUCCESS, GET_USER_SIGNUP_FAILURE} from '../constants';
import {ajax} from '../ajax';


export function* userLogInHandler(action) {
    try {
        const {userName, password} = action.data;
        debugger;
        console.log('Sagas listened');
        const getApi = SERVER_HOST+(SERVER_LOGIN_API.replace('userNameValue', userName).replace('passwordValue',password));
        const callDetails = {method :'get', api:getApi}
        const response = yield call(ajax, callDetails);
        yield put({type: GET_USER_LOGIN_SUCCESS, data : response.data});
     } catch (e) {
        yield put({type: GET_USER_LOGIN_FAILURE, message: e.message});
     }
}

export function* watchUserLogIn() {
  yield takeEvery(GET_USER_LOGIN_ONSUBMIT || GET_USER_SIGNUP_ONSUBMIT, userLogInHandler)
}


export function* signUpHandler(action) {
    try {
        console.log('Sagas listened' + action.data);
        const signupAPI = SERVER_HOST+(SERVER_SIGNUP_API);
        const callDetails = {method :'post', api:signupAPI, params : action.data}
        const response = yield call(ajax, callDetails);
        yield put({type: GET_USER_SIGNUP_SUCCESS, data : response.data});
     } catch (e) {
        yield put({type: GET_USER_SIGNUP_FAILURE, message: e.message});
     }
}

export function* watchUserSignUp() {
  yield takeEvery(GET_USER_SIGNUP_ONSUBMIT, signUpHandler)
}