import { getAllAlbums } from '../../api/data.js';
import { template } from './catalogView.js';

export function catalogPage(ctx) {
    ctx.render(template(catalogModel(ctx)));
}

async function catalogModel(ctx) {
    const user = ctx.getUserData();
    const album = await getAllAlbums();

    album.forEach(a => a.loggedUser = user ? true : false);

    return album;
}