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
    allMemes: '/data/memes?sortBy=_createdOn%20desc',
    memeById: (id) => `/data/memes/${id}`,
    createMeme: '/data/memes',
    editMeme: (id) => `/data/memes/${id}`,
    deleteMeme: (id) => `/data/memes/${id}`,
    detailsMeme: (id) => `/data/memes/${id}`,
    myProfile: (id) => `/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
};

async function getAllMemes() {
    return api.get(endpoints.allMemes);
}
async function getMemeById(memeId) {
    return api.get(endpoints.memeById(memeId));
}
async function createMeme(data) {
    return api.post(endpoints.createMeme, data);
}
async function editMeme(memeId, data) {
    return api.put(endpoints.editMeme(memeId), data);
}
async function deleteMeme(memeId) {
    return api.del(endpoints.deleteMeme(memeId));
}
async function detailsMeme(memeId) {
    return api.get(endpoints.detailsMeme(memeId));
}
async function getMyProfile(userId) {
    return api.get(endpoints.myProfile(userId));
}

export {
    login,
    register,
    logout,
    getUserData,
    setUserData,
    removeUserData,
    getAllMemes,
    getMemeById,
    createMeme,
    editMeme,
    deleteMeme,
    detailsMeme,
    getMyProfile
};