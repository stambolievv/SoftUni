const host = 'http://localhost';
const port = 3030;

async function request(url, method, data) {
    const options = {
        method,
        headers: {}
    };
    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${host}:${port}${url}`, options);
        if (response.ok != true) { throw new Error(`${response.status} ${response.statusText}`); }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error.message);
    }
}

async function createBook(book) {
    return await request('/jsonstore/collections/books', 'post', book);
}

async function readBooks() {
    return await request('/jsonstore/collections/books', 'get');
}

async function updateBook(id, book) {
    return await request('/jsonstore/collections/books/' + id, 'put', book);
}

async function deleteBook(id) {
    return await request('/jsonstore/collections/books/' + id, 'delete');
}

export {
    createBook,
    readBooks,
    updateBook,
    deleteBook
};