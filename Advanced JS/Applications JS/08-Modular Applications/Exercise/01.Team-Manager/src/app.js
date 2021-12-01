import { getSessionUser, logout } from './api/data.js';
import { page, render } from './lib/lib.js';
import { homePage } from './views/home/homeController.js';
import { browseTeamsPage } from './views/browseTeams/browseController.js';
import { myTeamsPage } from './views/myTeams/myTeamsController.js';
import { detailsPage } from './views/detailsTeam/detailsController.js';
import { createPage } from './views/createTeam/createController.js';
import { editPage } from './views/editTeam/editController.js';
import { loginPage } from './views/login/loginController.js';
import { registerPage } from './views/register/registerController.js';
import { showModal } from './common/modal.js';

const root = {
    container: document.getElementById('container'),
    userNav: document.getElementById('user'),
    guestNav: document.getElementById('guest'),
    logoutBtn: document.getElementById('logoutBtn')
};

root.logoutBtn.addEventListener('click', onLogout);

page(decorateContext);
page('/home', homePage);
page('/teams', browseTeamsPage);
page('/my-teams', myTeamsPage);
page('/details/:id', detailsPage);
page('/create-team', createPage);
page('/edit/:id', editPage);
page('/users/login', loginPage);
page('/users/register', registerPage);

page.redirect('/', '/home');
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root.container);
    ctx.updateNavigation = updateNavigation;
    ctx.getSessionUser = getSessionUser;

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
    const confirmed = await showModal('Are you sure you want to log out?');
    if (confirmed) {
        await logout();

        updateNavigation();
        page.redirect('/home');
    }
}

updateNavigation();