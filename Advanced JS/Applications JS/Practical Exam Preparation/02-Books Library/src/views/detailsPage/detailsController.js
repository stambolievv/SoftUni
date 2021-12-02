import { detailsBook, deleteBook } from '../../api/data.js';
import { likeBook, allLikesOfBook, getMyLikeOfBook } from '../../api/data.js';

import { template } from './detailsView.js';

export function detailsPage(ctx) {
    ctx.render(template(detailsModel(ctx)));
}

async function detailsModel(ctx) {
    const userData = ctx.getUserData();

    const [book, likes, hasLike] = await Promise.all([
        detailsBook(ctx.params.id),
        allLikesOfBook(ctx.params.id),
        userData ? getMyLikeOfBook(ctx.params.id, userData.id) : 0
    ]);

    const isOwner = (userData && book._ownerId == userData.id);
    const showLike = userData != null && isOwner == false && hasLike == 0;

    return { book, info: { isOwner, likes, showLike }, actions: { onLike, onDelete } };

    async function onLike() {
        await likeBook({ bookId: book._id });

        ctx.page.redirect(`/details/${book._id}`);
    }

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to permanently delete ${book.title}?`);
        if (confirmed) {
            await deleteBook(book._id);

            ctx.page.redirect('/home');
        }
    }
}