import { GET_USER_LOGIN_FAILURE, GET_USER_LOGIN_SUCCESS, LOGIN_REMOVE_ALERT,LOGIN_UPDATE_USERDATA } from '../constants';

let initialState = {
    alert: { show: false, message: '' },
    userData : null,
    isSubmittedLogIn : false
};

export function logInPage(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case GET_USER_LOGIN_SUCCESS:
            return { ...state, alert: { show: false, message: action.data.message }, userData: action.data.user };
        case GET_USER_LOGIN_FAILURE:
            return { ...state, alert: { show: true,message: action.data }, userData : null };
        case LOGIN_REMOVE_ALERT:
            return { ...state, alert: { show: false, userData : null, message: '' } };
            case LOGIN_UPDATE_USERDATA:
            return { ...state, userData:action.data };
        default:
            return state;
    }
}