import { updateBook } from '../lib/request.js';
import { updateTemplate } from '../templates/updateTemplate.js';

export function showUpdate(ctx) {
    if (ctx.book == undefined) { return null; }
    return updateTemplate(ctx.book, onSubmit, ctx);
}

async function onSubmit(event, ctx) {
    event.preventDefault();

    const form = new FormData(event.target);
    const id = form.get('id').trim();
    const title = form.get('title').trim();
    const author = form.get('author').trim();

    await updateBook(id, { author, title });

    event.target.reset();

    delete ctx.book;
    ctx.update();
}
