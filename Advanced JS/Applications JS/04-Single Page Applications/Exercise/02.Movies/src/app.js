import { showSection } from './lib/dom.js';
import { getSessionUser } from './lib/api/data.js';
import { showHome } from './views/home.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showLogout } from './views/logout.js';

document.getElementById('logoutBtn').addEventListener('click', (e) => goTo('logout', e));

const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);

const links = {
    'home': showHome,
    'create': showCreate,
    'details': showDetails,
    'edit': showEdit,
    'login': showLogin,
    'register': showRegister,
    'logout': showLogout,
};

const ctx = {
    goTo,
    updateNav,
    showSection
};

function goTo(name, ...params) {
    const view = links[name];
    if (typeof view == 'function') { view(ctx, ...params); }
}

function onNavigate(e) {
    const navLinks = {
        'homeLink': 'home',
        'loginLink': 'login',
        'registerLink': 'register'
    };
    const name = navLinks[e.target.id];
    if (name) {
        e.preventDefault();
        goTo(name);
    }
}

function updateNav() {
    const loggedUser = getSessionUser('currentUser');
    if (loggedUser == null) {
        nav.querySelector('#user').style.display = 'none';
        nav.querySelector('#guest').style.display = 'block';
    } else {
        nav.querySelector('#guest').style.display = 'none';
        nav.querySelector('#user').style.display = 'block';
        nav.querySelector('#welcomeMsg').textContent = `Welcome, ${loggedUser.email}`;
    }
}

updateNav();
goTo('home');