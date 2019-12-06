import { GET_USER_SIGNUP_FAILURE, GET_USER_SIGNUP_SUCCESS, SIGNUP_REMOVE_ALERT } from '../constants';

let initialState = {
    alert: { show: false, message: '' }
};

export function signUpPage(state = initialState, action) {
    switch (action.type) {
        case GET_USER_SIGNUP_SUCCESS:
            return { ...state, alert: { show: false, message: action.data } };
        case GET_USER_SIGNUP_FAILURE:
            return { ...state, alert: { show: true, message: action.data } };
        case SIGNUP_REMOVE_ALERT:
            return { ...state, alert: { show: false, message: '' } };
        default:
            return state;
    }
}