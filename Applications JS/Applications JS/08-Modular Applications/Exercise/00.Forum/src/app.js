import { getSessionUser, logout } from './api/data.js';
import { page, render } from './lib/lib.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

const root = {
    container: document.getElementById('container'),
    userNav: document.getElementById('user'),
    guestNav: document.getElementById('guest'),
    logoutBtn: document.getElementById('logoutBtn')
};

root.logoutBtn.addEventListener('click', onLogout);

page(decorateContext);
page('/home', catalogPage);
page('/my-furniture', catalogPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/users/login', loginPage);
page('/users/register', registerPage);

page.redirect('/', '/home');
page.start();

function decorateContext(ctx, next) {
    ctx.render = (template) => render(template, root.container);
    ctx.updateNavigation = updateNavigation;

    next();
}

function updateNavigation() {
    const user = getSessionUser();
    if (user) {
        root.userNav.style.display = 'inline-block';
        root.guestNav.style.display = 'none';
    } else {
        root.userNav.style.display = 'none';
        root.guestNav.style.display = 'inline-block';
    }
}

async function onLogout() {
    await logout();

    page.redirect('/home');
    updateNavigation();
}

updateNavigation();