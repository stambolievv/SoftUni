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

function getAll() {
    return api.get(endpoints.all);
}
function getById(id) {
    return api.get(endpoints.byId + id);
}
function getMyItems(userId) {
    return api.get(endpoints.myItems(userId));
}
function createItem(data) {
    return api.post(endpoints.create, data);
}
function updateItem(id, data) {
    return api.put(endpoints.update + id, data);
}
function deleteItem(id) {
    return api.del(endpoints.delete + id);
}

export {
    login,
    register,
    logout,
    getSessionUser,
    setSessionUser,
    removeSessionUser,
    getAll,
    getById,
    getMyItems,
    createItem,
    updateItem,
    deleteItem
};