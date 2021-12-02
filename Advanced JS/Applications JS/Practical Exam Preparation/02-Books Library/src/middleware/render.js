import { getUserData, logout } from '../api/data.js';
import { showModal } from '../common/modal.js';
import { showNotify } from '../common/notify.js';
import { page, render } from '../lib/lib.js';

const root = {
    container: document.getElementById('site-content'),
    userNav: document.getElementById('user'),
    guestNav: document.getElementById('guest'),
    welcomeSpan: document.querySelector('#user span'),
    logoutBtn: document.getElementById('logoutBtn')
};

root.logoutBtn.addEventListener('click', onLogout);

export function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root.container);
    ctx.updateNavigation = updateNavigation;
    ctx.getUserData = getUserData;
    ctx.showModal = showModal;
    ctx.showNotify = showNotify;
    ctx.ownerUserOnly = ownerUserOnly;

    next();
}

function ownerUserOnly(item) {
    const userData = getUserData();
    if (userData && item._ownerId != userData.id) {
        return page.redirect('/home');
    }
}

function updateNavigation() {
    const user = getUserData();
    if (user) {
        root.userNav.style.display = 'inline-block';
        root.guestNav.style.display = 'none';
        root.welcomeSpan.textContent = `Welcome, ${user.email}`;
    } else {
        root.userNav.style.display = 'none';
        root.guestNav.style.display = 'inline-block';
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