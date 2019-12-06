import {GET_USER_LOGIN_ONSUBMIT, GET_USER_SIGNUP_ONSUBMIT, LOGIN_REMOVE_ALERT, GET_USER_LOGIN_FAILURE, GET_USER_SIGNUP_FAILURE, SIGNUP_REMOVE_ALERT, LOGIN_UPDATE_USERDATA} from '../constants';

export function logInOnSubmit(data){
    return{type:GET_USER_LOGIN_ONSUBMIT,data};
}

export function signUpOnSubmit(data){
    return{type:GET_USER_SIGNUP_ONSUBMIT,data};
}

export function signUpFailure(data){
    return{type:GET_USER_SIGNUP_FAILURE,data};
}

export function signUpRemoveAlert(){
    return{type:SIGNUP_REMOVE_ALERT};
}

export function logInFailure(data){
    return{type:GET_USER_LOGIN_FAILURE,data};
}

export function logInRemoveAlert(){
    return{type:LOGIN_REMOVE_ALERT};
}

export function updateUserData(){
    return{type:LOGIN_UPDATE_USERDATA};
}
