import { userConstants } from '../../../constants/user.constants';
import { userService } from '../../../services';
import { alertActions } from './';

export const userActions = {
    login,
    logout,
    register
};
 
function login(username, password) {
    return dispatch => {
        userService.login(username, password)
            .then(response => {
                dispatch(success(response));
            });
    };
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {

        userService.register(user)
            .then(response => {
                    dispatch(success(response));
                    dispatch(alertActions.success('Registration successful'));
                });
    };
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
}