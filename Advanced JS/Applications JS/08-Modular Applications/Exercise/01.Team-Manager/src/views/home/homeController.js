import { template } from './homeView.js';

export function homePage(ctx) {
    const userData = ctx.getSessionUser();
    ctx.render(template(userData));
}