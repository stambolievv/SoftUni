import { detailsAlbum, deleteAlbum } from '../../api/data.js';
import { template } from './detailsView.js';

export function detailsPage(ctx) {
    ctx.render(template(detailsModel(ctx)));
}

async function detailsModel(ctx) {
    const userData = ctx.getUserData();

    const albumId = ctx.params.id;
    const album = await detailsAlbum(albumId);

    const isOwner = (userData && album._ownerId == userData.id);

    return { album, actions: { isOwner, onDelete } };

    async function onDelete() {
        const confirmed = await ctx.showModal(`Are you sure you want to permanently delete ${album.name}?`);
        if (confirmed) {
            await deleteAlbum(album._id);

            ctx.page.redirect('/catalog');
        }
    }
}