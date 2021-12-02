import { getMemeById, editMeme } from '../../api/data.js';
import { showNotify } from '../../common/notify.js';
import { formDataHandler } from '../../common/formData.js';
import { template } from './editView.js';

export function editPage(ctx) {
    ctx.render(template(editModel(ctx)));
}

async function editModel(ctx) {
    const memeId = ctx.params.id;
    const meme = await getMemeById(memeId);

    return { meme, onSubmit };

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataHandler(e.target, 'title', 'imageUrl', 'description');

            await editMeme(memeId, data);

            showNotify('Meme was edited!', 'loadingBox');
            ctx.page.redirect(`/details/${memeId}`);
        } catch (err) {
            const errors = {
                message: err.message || err.errorMsg.message,
                type: err.errorType || {},
                data: err.errorData || {}
            };
            showNotify(errors.message, 'errorBox');
            // update(errors.type);
        }
    }
}