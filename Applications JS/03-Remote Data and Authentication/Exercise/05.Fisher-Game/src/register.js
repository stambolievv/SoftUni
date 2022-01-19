import { request } from './request.js';

window.addEventListener('DOMContentLoaded', () => {
    const loggedUser = JSON.parse(sessionStorage.getItem('user'));
    if (loggedUser == null) {
        document.getElementById('user').style.display = 'none';
    } else {
        document.getElementById('guest').style.display = 'none';
    }

    document.querySelector('form').addEventListener('submit', onSubmit);
});

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePass = formData.get('rePass').trim();

    if (!email || !password || !rePass || password != rePass) { throw new Error('Invalid username or password!'); }

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

    return window.location = './index.html';
}