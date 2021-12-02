import { html, until, nothing } from '../../lib/lib.js';
import { spinner } from '../../common/spinner.js';

export const template = (bookPromise) => html`
    <!-- Details Page ( for Guests and Users ) -->
    <section id="details-page" class="details">
        ${until(loadData(bookPromise), spinner())}
    </section>
`;

const bookCard = (book, info, actions) => html`
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${controlsTemplate(book, info, actions)}
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
`;

const controlsTemplate = (book, info, actions) => html`
    ${info.isOwner ? redactCard(book, actions.onDelete) : nothing}
    ${likeCard(info.likes, info.showLike, actions.onLike)}
`;

const redactCard = (book, onDelete) => html`
    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
    <a class="button" href="/edit/${book._id}">Edit</a>
    <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>
`;

const likeCard = (likes, showLike, onLike) => html`
    <!-- Bonus -->
    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
    ${showLike
        ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
        : nothing
    }
    <!-- ( for Guests and Users )  -->
    <div class="likes">
        <img class="hearts" src="/images/heart.png">
        <span id="total-likes">Likes: ${likes}</span>
    </div>
    <!-- Bonus -->
`;

async function loadData(bookPromise) {
    const data = await bookPromise;
    return bookCard(data.book, data.info, data.actions);
}
