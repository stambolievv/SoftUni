import { createAlbum } from '../../api/data.js';
import { formDataHandler } from '../../common/formData.js';
import { template } from './createView.js';

export function createPage(ctx) {
    const update = (errors = {}) => ctx.render(template(onSubmit, errors));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataHandler(e.target, 'name', 'imgUrl', 'price', 'releaseDate', 'artist', 'genre', 'description');

            await createAlbum(data);

            ctx.showNotify(`You successfully created ${data.name} album`, 'infoBox');

            ctx.page.redirect('/catalog');
        } catch (err) {
            const errors = {
                message: err.message || err.errorMsg.message,
                type: err.errorType || {},
                data: err.errorData || {}
            };
            ctx.showNotify(errors.message);
            update(errors);
        }
    }
}