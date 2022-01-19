import { logout } from '../lib/api/data.js';

export async function showLogout(ctx, e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    await logout();

    ctx.updateNav();
    ctx.goTo('loginLink');
}
