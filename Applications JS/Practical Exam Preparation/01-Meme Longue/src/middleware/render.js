import { getUserData, logout } from '../api/data.js';
import { page, render } from '../lib/lib.js';

const root = {
    container: document.querySelector('main'),
    userNav: document.querySelector('.user'),
    guestNav: document.querySelector('.guest'),
    welcomeSpan: document.querySelector('.user span'),
    logoutBtn: document.getElementById('logoutBtn')
};

root.logoutBtn.addEventListener('click', onLogout);

export function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root.container);
    ctx.updateNavigation = updateNavigation;
    ctx.getUserData = getUserData;

    next();
}

function updateNavigation() {
    const user = getUserData();
    if (user) {
        root.userNav.style.display = 'block';
        root.guestNav.style.display = 'none';
        root.welcomeSpan.textContent = `Welcome, ${user.email}`;
    } else {
        root.userNav.style.display = 'none';
        root.guestNav.style.display = 'block';
    }
}

async function onLogout() {
    await logout();

    updateNavigation();
    page.redirect('/home');
    // const confirmed = await showModal('Are you sure you want to log out?');
    // if (confirmed) {
    // }
}

updateNavigation();