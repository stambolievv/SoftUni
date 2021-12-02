import { template } from './homeView.js';

export function homePage(ctx) {
    const user = ctx.getUserData();
    if (user) { return ctx.page.redirect('all-memes'); }

    ctx.render(template());
}