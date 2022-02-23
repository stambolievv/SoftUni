import { createMeme } from '../../api/data.js';
import { formDataHandler } from '../../util/formData.js';
import { showNotify } from '../../util/notify.js';
import { template } from './createView.js';

export function createPage(ctx) {
    const update = (errors = {}) => ctx.render(template(onSubmit, errors));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataHandler(e.target, 'title', 'description', 'imageUrl');

            await createMeme(data);

            showNotify('You successfully created a meme.', 'infoBox');
            ctx.page.redirect('/all-memes');
        } catch (err) {
            const errors = {
                message: err.message || err.errorMsg.message,
                type: err.errorType || {},
                data: err.errorData || {}
            };
            showNotify(errors.message, 'errorBox');
            update(errors);
        }
    }
}