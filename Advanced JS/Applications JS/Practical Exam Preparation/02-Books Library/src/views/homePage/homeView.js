import { html, until } from '../../lib/lib.js';
import { spinner } from '../../common/spinner.js';

export const template = (bookPromise) => html`
    <!-- Dashboard Page ( for Guests and Users ) -->
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        <ul class="other-books-list">
            ${until(loadData(bookPromise), spinner())}
        </ul>
    </section>
`;

const bookCard = (book) => html`
    <!-- Display ul: with list-items for All books (If any) -->
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href="/details?${book._id}">Details</a>
    </li>
`;

const noBooksCard = () => html`
    <!-- Display paragraph: If there are no books in the database -->
    <p class="no-books">No books in database!</p>
`;

async function loadData(bookPromise) {
    const data = await bookPromise;
    if (data.length == 0) { return noBooksCard(); }
    return data.map(bookCard);
}