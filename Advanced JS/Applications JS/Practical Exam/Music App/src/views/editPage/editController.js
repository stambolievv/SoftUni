import { getAlbumById, updateAlbum } from '../../api/data.js';
import { formDataHandler } from '../../common/formData.js';
import { template } from './editView.js';

export function editPage(ctx) {
    ctx.render(template(editModel(ctx)));
}

async function editModel(ctx) {
    const albumId = ctx.params.id;
    const album = await getAlbumById(albumId);

    ctx.ownerUserOnly(album);

    return { album, onSubmit };

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataHandler(e.target, 'name', 'imgUrl', 'price', 'releaseDate', 'artist', 'genre', 'description');

            await updateAlbum(albumId, data);

            ctx.showNotify(`You successfully edited "${album.name}" album`, 'infoBox');

            ctx.page.redirect(`/details/${album._id}`);
        } catch (err) {
            const errors = {
                message: err.message || err.errorMsg.message,
                type: err.errorType || {},
                data: err.errorData || {}
            };
            ctx.showNotify(errors.message);
        }
    }
}