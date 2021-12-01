import { showSection } from './lib/dom.js';
import { getSessionUser } from './lib/api/data.js';
import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showLogout } from './views/logout.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

document.getElementById('logoutBtn').addEventListener('click', (e) => goTo('logoutBtn', e));

const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);

const links = {
    'homeLink': showHome,
    'catalogLink': showCatalog,
    'createLink': showCreate,
    'detailsLink': showDetails,
    'logoutBtn': showLogout,
    'loginLink': showLogin,
    'registerLink': showRegister,
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
    const name = links[e.target.id];
    if (name) {
        e.preventDefault();
        goTo(e.target.id);
    }
}

function updateNav() {
    const loggedUser = getSessionUser('currentUser');
    if (loggedUser == null) {
        [...nav.querySelectorAll('.user')].forEach(x => x.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(x => x.style.display = 'block');
    } else {
        [...nav.querySelectorAll('.guest')].forEach(x => x.style.display = 'none');
        [...nav.querySelectorAll('.user')].forEach(x => x.style.display = 'block');
    }
}

updateNav();
goTo('homeLink');