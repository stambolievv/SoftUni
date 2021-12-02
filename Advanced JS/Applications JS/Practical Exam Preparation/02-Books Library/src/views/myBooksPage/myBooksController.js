import { getMyProfile } from '../../api/data.js';
import { template } from './myBooksView.js';

export function myBooksPage(ctx) {
    ctx.render(template(myBooksModel(ctx)));
}

async function myBooksModel(ctx) {
    const userData = ctx.getUserData();
    const book = await getMyProfile(userData.id);

    return { book, userData };
}