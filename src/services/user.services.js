import config from 'config';

export const userService = {
    register
};


// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
                console.log(response)
            }

            // const error = (data && data.message) || response.statusText;
            // return Promise.reject(error);
        }

        return data;
    });
}