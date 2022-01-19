const getSessionUser = (userKey) => {
    return JSON.parse(sessionStorage.getItem(userKey));
};

const setSessionUser = (userKey, userData) => {
    const data = JSON.stringify({
        email: userData.email,
        id: userData._id,
        token: userData.accessToken
    });
    return sessionStorage.setItem(userKey, data);
};

const removeSessionUser = (userKey) => {
    return sessionStorage.removeItem(userKey);
};

const host = 'http://localhost';
const port = 3030;

async function request(url, options) {
    try {
        const response = await fetch(`${host}:${port}${url}`, options);

        if (response.ok != true) {
            if (response.status == 403) { removeSessionUser('currentUser'); }
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status == 204 ? response : await response.json();

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

    const user = getSessionUser('currentUser');
    if (user != null) {
        options.headers['X-Authorization'] = user.token;
    }

    return options;
}

//CRUD
async function get(url) {
    return request(url, createOption('get'));
}
async function post(url, data) {
    return request(url, createOption('post', data));

}
async function put(url, data) {
    return request(url, createOption('put', data));

}
async function del(url) {
    return request(url, createOption('delete'));
}

//authorizations
async function login(data, url = '/users/login') {
    const result = await post(url, data);
    setSessionUser('currentUser', result);
}
async function register(data, url = '/users/register') {
    const result = await post(url, data);
    setSessionUser('currentUser', result);
}
async function logout(url = '/users/logout') {
    await get(url);
    removeSessionUser('currentUser');
}

export {
    get,
    post,
    put,
    del,
    login,
    register,
    logout,
    getSessionUser,
    setSessionUser,
    removeSessionUser
};