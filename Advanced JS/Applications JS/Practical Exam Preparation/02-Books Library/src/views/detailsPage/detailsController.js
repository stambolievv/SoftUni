import { detailsMeme, deleteMeme } from '../../api/data.js';
import { template } from './detailsView.js';

export function detailsPage(ctx) {
    ctx.render(template(detailsModel(ctx)));
}

async function detailsModel(ctx) {
    const userData = ctx.getUserData();

    const meme = await detailsMeme(ctx.params.id);
    const isOwner = (userData && meme._ownerId == userData.id);

    return { meme, isOwner, onDelete };

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to permanently delete this meme?');
        if (confirmed) {
            await deleteMeme(meme._id);

            ctx.page.redirect('/all-memes');
        }
    }
}