import { searchBook } from '../../api/data.js';
import { formDataHandler } from '../../common/formData.js';
import { template } from './searchView.js';

export async function searchPage(ctx) {
    const query = ctx.querystring.split('=')[1];
    let books = [];

    if (query) { books = await searchBook(decodeURIComponent(query)); }

    ctx.render(template(books, onSubmit, query));

    async function onSubmit(e) {
        e.preventDefault();

        const { search } = formDataHandler(e.target, 'search');
        if (search) { ctx.page.redirect(`/search?query=${encodeURIComponent(search)}`); }
    }
}
