import { searchAlbums } from '../../api/data.js';
import { template } from './searchView.js';

export async function searchPage(ctx) {
    const userData = ctx.getUserData();
    const query = ctx.querystring.split('=')[1];

    const results = { albums: [] };

    if (query) { results.albums = await searchAlbums(decodeURIComponent(query)); }

    ctx.render(template(results.albums, userData, onSubmit, query));

    async function onSubmit(e) {
        e.preventDefault();

        const search = document.querySelector('#search-input').value;
        if (search) {
            ctx.page.redirect(`/search?query=${encodeURIComponent(search)}`);
        } else {
            ctx.page.redirect('/search');
        }
    }
}
