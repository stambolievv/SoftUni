import * as api from './api.js';
const login = api.login;
const register = api.register;
const logout = api.logout;

const getSessionUser = api.getSessionUser;
const setSessionUser = api.setSessionUser;
const removeSessionUser = api.removeSessionUser;

export {
    login,
    register,
    logout,
    getSessionUser,
    setSessionUser,
    removeSessionUser,
};