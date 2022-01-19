import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

// user authentication
const userKey = 'currentUserData';
const getSessionUser = () => JSON.parse(sessionStorage.getItem(userKey));
const setSessionUser = (data) => sessionStorage.setItem(userKey, data);
const removeSessionUser = () => sessionStorage.removeItem(userKey);

// DB requests
const endpoints = {
    all: '/data/catalog',
    byId: '/data/catalog/',
    myItems: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    create: '/data/catalog',
    update: '/data/catalog/',
    delete: '/data/catalog/'
};

export {
    login,
    register,
    logout,
    getSessionUser,
    setSessionUser,
    removeSessionUser
};