import { html, until } from '../../lib/lib.js';
import { spinner } from '../../common/spinner.js';

export const template = (myBooksPromise) => html`
    <!-- My Books Page ( Only for logged-in users ) -->
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        ${until(loadData(myBooksPromise), spinner())}
    </section>
`;

const booksTemplate = (books) => html`
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">
        ${books.map(bookCard)}
    </ul>
`;

const bookCard = (book) => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
`;

const noBooksCard = () => html`
    <!-- Display paragraph: If the user doesn't have his own books  -->
    <p class="no-books">No books in database!</p>
`;

async function loadData(myBooksPromise) {
    const data = await myBooksPromise;
    if (data.length == 0) { return noBooksCard(); }
    return booksTemplate(data);
}