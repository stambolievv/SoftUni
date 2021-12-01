const tbody = document.querySelector('tbody');
const form = document.querySelector('form');

async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');

    const result = await createBooks({ author, title });
    tbody.appendChild(template(result._id, result));

    e.target.reset();
}

function onEdit(id, book) {
    const newForm = elem('form', { onsubmit: (e) => saveForm(e, id) },
        elem('h3', {}, 'Save FORM'),
        elem('label', {}, 'TITLE'),
        elem('input', { type: 'text', name: 'title', value: book.title }),
        elem('label', {}, 'AUTHOR'),
        elem('input', { type: 'text', name: 'author', value: book.author }),
        elem('button', {}, 'Save')
    );

    document.querySelector('form').replaceWith(newForm);

    async function saveForm(e, id) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title');
        const author = formData.get('author');

        await updateBook(id, { author, title });
        readBooks();

        e.target.replaceWith(form);
        e.target.reset();
    }
}

async function createBooks(book) {
    return await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
}

async function readBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'get'
    });

    const result = Object.entries(books).map(([id, book]) => template(id, book));
    tbody.replaceChildren(...result);
}

async function updateBook(id, book) {
    return await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
}

async function deleteBook(id) {
    return await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete'
    });
}

function template(id, book) {
    return elem('tr', {},
        elem('td', {}, book.title),
        elem('td', {}, book.author),
        elem('td', {},
            elem('button', {
                onclick: (e) => {
                    e.preventDefault();
                    onEdit(id, book);
                }
            }, 'Edit'),
            elem('button', {
                onclick: (e) => {
                    e.preventDefault();
                    deleteBook(id);
                    e.target.parentElement.parentElement.remove();
                }
            }, 'Delete')
        )
    );
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.status != 200) { throw new Error(`${response.status} ${response.statusText}`); }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error.message);
    }
}

function elem(type, props, ...content) {
    const element = document.createElement(type);
    for (const prop in props) {
        element[prop] = props[prop];
    }
    for (let entry of content) {
        if (typeof entry == 'string' || typeof entry == 'number') {
            entry = document.createTextNode(entry);
        }
        element.appendChild(entry);
    }
    return element;
}

form.addEventListener('submit', onCreate);
document.getElementById('loadBooks').addEventListener('click', readBooks);
window.addEventListener('DOMContentLoaded', readBooks);