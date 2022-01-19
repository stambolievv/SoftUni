import { getUserData, setUserData, removeUserData } from './data.js';

const location = {
    protocol: 'http:',
    hostname: 'localhost:3030',
};

async function request(path, options) {
    try {
        const response = await fetch(`${location.protocol}//${location.hostname}${path}`, options);

        if (response.ok != true) {
            if (response.status == 403) { removeUserData(); }
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            return await response.json();
        } catch (err) {
            return response;
        }

    } catch (error) {
        throw error;
    }
}

function createOption(method, data) {
    const options = { method, headers: {} };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = getUserData();
    if (user != null) {
        options.headers['X-Authorization'] = user.token;
    }

    return options;
}

// CRUD
async function get(path) {
    return request(path, createOption('GET'));
}
async function post(path, data) {
    return request(path, createOption('POST', data));

}
async function put(path, data) {
    return request(path, createOption('PUT', data));

}
async function del(path) {
    return request(path, createOption('DELETE'));
}

// authentication
async function login(data, path = '/users/login') {
    const result = await post(path, data);

    const userData = JSON.stringify({
        email: result.email,
        id: result._id,
        token: result.accessToken
    });

    setUserData(userData);

    return result;
}
async function register(data, path = '/users/register') {
    const result = await post(path, data);

    const userData = JSON.stringify({
        email: result.email,
        id: result._id,
        token: result.accessToken
    });

    setUserData(userData);

    return result;
}
async function logout(path = '/users/logout') {
    const result = await get(path);

    removeUserData();

    return result;
}

export {
    get,
    post,
    put,
    del,
    login,
    register,
    logout,
};