import { createBook } from '../../api/data.js';
import { formDataHandler } from '../../common/formData.js';
import { showNotify } from '../../common/notify.js';
import { template } from './createView.js';

export function createPage(ctx) {
    const update = (errors = {}) => ctx.render(template(onSubmit, errors));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataHandler(e.target, 'title', 'description', 'imageUrl');

            await createBook(data);

            showNotify('You successfully created a book.', 'infoBox');
            ctx.page.redirect('/home');
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