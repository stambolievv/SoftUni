import { getBookById, updateBook } from '../../api/data.js';
import { formDataHandler } from '../../common/formData.js';
import { template } from './editView.js';

export function editPage(ctx) {
    ctx.render(template(editModel(ctx)));
}

async function editModel(ctx) {
    const memeId = ctx.params.id;
    const meme = await getBookById(memeId);

    return { meme, onSubmit };

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataHandler(e.target, 'title', 'imageUrl', 'description');

            await updateBook(memeId, data);

            ctx.showNotify('Book was edited!', 'loadingBox');
            ctx.page.redirect('/home');
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