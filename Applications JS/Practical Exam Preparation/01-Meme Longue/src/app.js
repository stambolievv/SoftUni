import { page } from './lib/lib.js';
import { decorateContext } from './middleware/render.js';
import { homePage } from './views/home/homeController.js';
import { allMemesPage } from './views/allMemes/allMemesController.js';
import { myProfilePage } from './views/myProfile/myProfileController.js';
import { detailsPage } from './views/detailsMeme/detailsController.js';
import { createPage } from './views/createMeme/createController.js';
import { editPage } from './views/editMeme/editController.js';
import { loginPage } from './views/login/loginController.js';
import { registerPage } from './views/register/registerController.js';
import { showModal } from './util/modal.js';
import { showNotify } from './util/notify.js';

page(decorateContext);
page('/home', homePage);
page('/all-memes', allMemesPage);
page('/my-profile', myProfilePage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
page('/users/login', loginPage);
page('/users/register', registerPage);

page.redirect('/', '/home');
page.start();
