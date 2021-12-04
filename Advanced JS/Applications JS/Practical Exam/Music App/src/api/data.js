import * as api from './api.js';

// authentication
const login = api.login;
const register = api.register;
const logout = api.logout;

// user authorizations
const userKey = 'currentUserData';
const getUserData = () => JSON.parse(sessionStorage.getItem(userKey));
const setUserData = (data) => sessionStorage.setItem(userKey, data);
const removeUserData = () => sessionStorage.removeItem(userKey);

// DB requests
const endpoints = {
    allAlbums: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    albumById: (id) => `/data/albums/${id}`,
    createAlbum: '/data/albums',
    updateAlbum: (id) => `/data/albums/${id}`,
    deleteAlbum: (id) => `/data/albums/${id}`,
    detailsAlbum: (id) => `/data/albums/${id}`,
    searchAlbums: (query) => `/data/albums?where=${encodeURIComponent(`name LIKE "${query}"`)}`,
};

async function getAllAlbums() {
    return api.get(endpoints.allAlbums);
}
async function getAlbumById(albumId) {
    return api.get(endpoints.albumById(albumId));
}
async function createAlbum(data) {
    return api.post(endpoints.createAlbum, data);
}
async function updateAlbum(albumId, data) {
    return api.put(endpoints.updateAlbum(albumId), data);
}
async function deleteAlbum(albumId) {
    return api.del(endpoints.deleteAlbum(albumId));
}
async function detailsAlbum(albumId) {
    return api.get(endpoints.detailsAlbum(albumId));
}
async function searchAlbums(query) {
    return api.get(endpoints.searchAlbums(query));
}

export {
    login,
    register,
    logout,
    getUserData,
    setUserData,
    removeUserData,
    getAllAlbums,
    getAlbumById,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    detailsAlbum,
    searchAlbums,
};