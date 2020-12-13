import { combineReducers } from 'redux';
import  todoReducer  from './todoReducer';
import { authentication } from './authReducer/authentication.reducer';
import { registration } from './authReducer/registration.reducer';
import { alert } from './authReducer/alert.reducer';
import auth from './fireAuth/auth'

const rootReducer = combineReducers({
    todo: todoReducer,
    authentication,
    user: registration,
    alert,
    auth

});

export default rootReducer;