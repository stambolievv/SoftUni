import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

// user authentication
const userKey = 'currentUserData';
const getSessionUser = () => JSON.parse(sessionStorage.getItem(userKey));
const setSessionUser = (data) => sessionStorage.setItem(userKey, data);
const removeSessionUser = () => sessionStorage.removeItem(userKey);

function paresQuerystring(string) {
    return string
        .split('&')
        .map(s => s.split('='))
        .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
}

// DB requests
const pageSize = 2;
const onSearch = (search) => search ? `&where=${encodeURIComponent(`make LIKE "${search}"`)}` : '';
const endpoints = {
    all: (pageSize, offset, search) => `/data/catalog?pageSize=${pageSize}&offset=${offset}` + onSearch(search),
    count: '/data/catalog?count',
    byId: '/data/catalog/',
    myItems: (userId, pageSize, offset, search) => `/data/catalog?where=_ownerId%3D%22${userId}%22&pageSize=${pageSize}&offset=${offset}` + onSearch(search),
    countMyItems: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22&count`,
    create: '/data/catalog',
    update: '/data/catalog/',
    delete: '/data/catalog/'
};

async function getAll(page, search) {
    const offset = (page - 1) * pageSize;
    const [data, size] = await Promise.all([
        api.get(endpoints.all(pageSize, offset, search)),
        api.get(endpoints.count)
    ]);

    return { data, pages: Math.ceil(size / pageSize) };
}
function getById(id) {
    return api.get(endpoints.byId + id);
}
async function getMyItems(userId, page, search) {
    const offset = (page - 1) * pageSize;
    const [data, size] = await Promise.all([
        api.get(endpoints.myItems(userId, pageSize, offset, search)),
        api.get(endpoints.countMyItems(userId))
    ]);

    return { data, pages: Math.ceil(size / pageSize) };
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
    paresQuerystring,
    getAll,
    getById,
    getMyItems,
    createItem,
    updateItem,
    deleteItem
};