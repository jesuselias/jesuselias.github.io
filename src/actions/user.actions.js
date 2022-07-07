import { userConstants } from '../constants/user.constants';
import { userService } from '../api';

export const userActions = {
    register
};

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                },
                error => {
                    console.log(error)
                    // dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    // function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
