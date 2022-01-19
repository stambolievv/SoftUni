import { createBook } from '../lib/request.js';
import { createTemplate } from '../templates/createTemplate.js';

export function showCreate(ctx) {
    if (ctx.book != undefined) { return null; }
    return createTemplate(onSubmit, ctx);
}

async function onSubmit(event, ctx) {
    event.preventDefault();

    const form = new FormData(event.target);
    const title = form.get('title').trim();
    const author = form.get('author').trim();

    await createBook({ author, title });

    event.target.reset();

    ctx.update();
}
