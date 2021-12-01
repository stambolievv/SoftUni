import { showModal } from '../common/modal.js';
import { getSessionUser, setSessionUser, removeSessionUser } from './data.js';

const location = {
    protocol: 'http:',
    hostname: 'localhost:3030',
};

async function request(path, options) {
    try {
        const response = await fetch(`${location.protocol}//${location.hostname}${path}`, options);

        if (response.ok != true) {
            if (response.status == 403) { removeSessionUser(); }
            const error = await response.json();
            throw new Error(error.message);
        }

        // try {
        //     return response.json();
        // } catch (err) {
        //     return response;
        // }

        return response.status == 204 ? response : response.json();
    } catch (error) {
        await showModal(error.message);
        throw error;
    }
}

function createOption(method, data) {
    const options = { method, headers: {} };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = getSessionUser();
    if (user != null) {
        options.headers['X-Authorization'] = user.token;
    }

    return options;
}

// CRUD
async function get(path) {
    return request(path, createOption('get'));
}
async function post(path, data) {
    return request(path, createOption('post', data));

}
async function put(path, data) {
    return request(path, createOption('put', data));

}
async function del(path) {
    return request(path, createOption('delete'));
}

// authorizations
async function login(data, path = '/users/login') {
    const result = await post(path, data);

    const userData = JSON.stringify({
        email: result.email,
        username: result.username,
        id: result._id,
        token: result.accessToken
    });

    setSessionUser(userData);
}
async function register(data, path = '/users/register') {
    const result = await post(path, data);

    const userData = JSON.stringify({
        email: result.email,
        username: result.username,
        id: result._id,
        token: result.accessToken
    });

    setSessionUser(userData);
}
async function logout(path = '/users/logout') {
    await get(path);
    removeSessionUser();
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