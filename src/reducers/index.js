import { combineReducers } from 'redux';
import {logInPage} from './loginReducer';
import {signUpPage} from './signupReducer';

export default combineReducers({
    logInPage,
    signUpPage
  });