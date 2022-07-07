/****** Signup USER*******/
export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const SAVE_INFO_USER = 'SAVE_INFO_USER';

export function actionSignupUserRequest() {
	return {
		type: SIGNUP_USER_REQUEST,
	};
}

export function actionSignupUserSuccess(user) {
	return {
		type: SIGNUP_USER_SUCCESS,
		payload: user,
	};
}

export function actionSignupUserFailure() {
	return {
		type: SIGNUP_USER_FAILURE,
	};
}

export function actionSaveInfoUser(data){
    return {
		type: SAVE_INFO_USER,
		payload: data,
	};
}