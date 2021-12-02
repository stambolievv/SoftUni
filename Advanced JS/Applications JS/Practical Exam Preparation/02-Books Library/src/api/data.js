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
    allBooks: '/data/books?sortBy=_createdOn%20desc',
    bookById: (id) => `/data/books/${id}`,
    myBooks: (id) => `/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
    createBook: '/data/books',
    updateBook: (id) => `/data/books/${id}`,
    deleteBook: (id) => `/data/books/${id}`,
    detailsBook: (id) => `/data/books/${id}`,
};

async function getAllBooks() {
    return api.get(endpoints.allBooks);
}
async function getBookById(bookId) {
    return api.get(endpoints.bookById(bookId));
}
async function getMyBooks(userId) {
    return api.get(endpoints.myBooks(userId));
}
async function createBook(data) {
    return api.post(endpoints.createBook, data);
}
async function updateBook(bookId, data) {
    return api.put(endpoints.updateBook(bookId), data);
}
async function deleteBook(bookId) {
    return api.del(endpoints.deleteBook(bookId));
}
async function detailsBook(bookId) {
    return api.get(endpoints.detailsBook(bookId));
}

export {
    login,
    register,
    logout,
    getUserData,
    setUserData,
    removeUserData,
    getAllBooks,
    getBookById,
    getMyBooks,
    createBook,
    updateBook,
    deleteBook,
    detailsBook
};