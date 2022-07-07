import {
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    SAVE_INFO_USER
} from '../actions/userAction';

const initialState = {
    isFetching: false,
    user: {
        username: '',
        email: '',
        subject: '',
        messaje: '',
    },
    users: {},
    request: '',
};

function userReducer(state = initialState, action) {
    console.log(state)
    switch (action.type) {
        case SIGNUP_USER_REQUEST:
            return {
                ...state,
                isFetching: true,
                users: {},
                request: 'Loading',
            };
        case SIGNUP_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                users: {},
                request: 'Failed',
            };
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.payload,
                request: 'success',
            };
        case SAVE_INFO_USER:
            return {
                ...state,
                isFetching: false,
                user: action.payload,
                request: 'success',
            };
        default:
            return state;
    }
}

export default userReducer;