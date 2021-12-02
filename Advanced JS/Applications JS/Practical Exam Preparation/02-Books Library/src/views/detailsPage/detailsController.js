import { detailsBook, deleteBook } from '../../api/data.js';
import { template } from './detailsView.js';

export function detailsPage(ctx) {
    ctx.render(template(detailsModel(ctx)));
}

async function detailsModel(ctx) {
    const userData = ctx.getUserData();

    const book = await detailsBook(ctx.params.id);
    const isOwner = (userData && book._ownerId == userData.id);

    return { book, isOwner, actions: { onLike, onDelete } };

    function onLike() {
        console.log('like');
    }

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to permanently delete ${book.title}?`);
        if (confirmed) {
            await deleteBook(book._id);

            ctx.page.redirect('/home');
        }
    }
}