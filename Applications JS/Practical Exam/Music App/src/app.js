import { page } from './lib/lib.js';
import { decorateContext } from './middleware/render.js';
import { homePage } from './views/homePage/homeController.js';
import { catalogPage } from './views/catalogPage/catalogController.js';
import { detailsPage } from './views/detailsPage/detailsController.js';
import { createPage } from './views/createPage/createController.js';
import { editPage } from './views/editPage/editController.js';
import { loginPage } from './views/loginPage/loginController.js';
import { registerPage } from './views/registerPage/registerController.js';
import { searchPage } from './views/searchPage/searchController.js';

page(decorateContext);
page('/home', homePage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
page('/users/login', loginPage);
page('/users/register', registerPage);
page('/search', searchPage);

page.redirect('/', '/home');
page.start();
