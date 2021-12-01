import { deleteBook, readBooks } from '../lib/request.js';
import { catalogTemplate, bookTemplate } from '../templates/catalogTemplate.js';

export function showCatalog(ctx) {
    return catalogTemplate(loadBooks(ctx));
}

async function loadBooks(ctx) {
    const books = await readBooks();

    Object.entries(books).forEach(([id, book]) => Object.assign(book, { _id: id }));

    return Object.values(books).map(book => {
        return bookTemplate(book, onEdit.bind(null, book, ctx), onDelete.bind(null, book, ctx));
    });
}

function onEdit(book, ctx) {
    ctx.book = book;
    ctx.update();
}

async function onDelete(book, ctx) {
    await deleteBook(book._id);
    ctx.update();
}