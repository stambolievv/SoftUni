import { html } from '../../lib/lib.js';

export const template = (books, onSubmit, query = '') => html`
    <!-- Search Page -->
    <section id="search-page" class="search">
        <form @submit=${onSubmit} id="search-form" action="" method="">
            <fieldset>
                <legend>Search</legend>
                <p class="field">
                    <span class="input">
                        <input type="text" name="search" id="search" .value=${query}>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Search">
            </fieldset>
        </form>
        ${books.length != 0 ? booksTemplate(books) : noBooksCard()}
    </section>
`;

const booksTemplate = (books) => html`
    <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list">
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
    <!-- Display paragraph: If there are no books in the database -->
    <p class="no-books">No results found!</p>
`;