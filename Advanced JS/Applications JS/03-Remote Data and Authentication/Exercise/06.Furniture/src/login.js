import { request } from './request.js';

async function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (!email || !password) {
        alert('Invalid username or password!\nTry again.');
        throw new Error('Invalid username or password!\nTry again.');
    }

    e.target.reset();

    const data = await request('/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const user = {
        email: data.email,
        id: data._id,
        token: data.accessToken
    };

    sessionStorage.setItem('user', JSON.stringify(user));
    return window.location = './homeLogged.html';
}

async function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePass = formData.get('rePass').trim();

    if (!email || !password || !rePass || password != rePass) {
        alert('Invalid username or password!\nTry again.');
        throw new Error('Invalid username or password!\nTry again.');
    }

    e.target.reset();

    const data = await request('/users/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const user = {
        email: data.email,
        id: data._id,
        token: data.accessToken
    };
    sessionStorage.setItem('user', JSON.stringify(user));

    return window.location = './homeLogged.html';
}

document.getElementById('loginForm').addEventListener('submit', onLogin);
document.getElementById('registerForm').addEventListener('submit', onRegister);