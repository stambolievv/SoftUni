import { getBookById, updateBook } from '../../api/data.js';
import { formDataHandler } from '../../common/formData.js';
import { template } from './editView.js';

export function editPage(ctx) {
    ctx.render(template(editModel(ctx)));
}

async function editModel(ctx) {
    const bookId = ctx.params.id;
    const book = await getBookById(bookId);

    ctx.ownerUserOnly(book);

    return { book, onSubmit };

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataHandler(e.target, 'title', 'imageUrl', 'description', 'type');

            await updateBook(bookId, data);

            ctx.showNotify(`${book.title} was successfully updated!`, 'loadingBox');
            ctx.page.redirect(`/details/${book._id}`);
        } catch (err) {
            const errors = {
                message: err.message || err.errorMsg.message,
                type: err.errorType || {},
                data: err.errorData || {}
            };
            ctx.showNotify(errors.message, 'errorBox');
            // update(errors.type);
        }
    }
}