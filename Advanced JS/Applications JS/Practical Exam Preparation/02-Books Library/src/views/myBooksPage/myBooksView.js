import { html, until } from '../../lib/lib.js';
import { spinner } from '../../common/spinner.js';

export const template = (myProfilePromise) => html`
    <!-- My Books Page ( Only for logged-in users ) -->
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        <!-- Display ul: with list-items for every user's books (if any) -->
        <ul class="my-books-list">
            <li class="otherBooks">
                <h3>Outlander</h3>
                <p>Type: Other</p>
                <p class="img"><img src="/images/book2.png"></p>
                <a class="button" href="#">Details</a>
            </li>
            <li class="otherBooks">
                <h3>A Court of Thorns and Roses</h3>
                <p>Type: Fiction</p>
                <p class="img"><img src="/images/book1.png"></p>
                <a class="button" href="#">Details</a>
            </li>
        </ul>
    
        <!-- Display paragraph: If the user doesn't have his own books  -->
        <p class="no-books">No books in database!</p>
    </section>
    <!-- Profile Page ( Only for logged users ) -->
    <section id="user-profile-page" class="user-profile">
        ${until(loadData(myProfilePromise), spinner())}
    </section>
`;

const profileCard = (meme, memeCount, user) => html`
    ${userInfoCard(user, memeCount)}
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${memeCount != 0 ? meme.map(memeCard) : noMemeCard()}
    </div>
`;

const noMemeCard = () => html`<p class="no-memes">No memes in database.</p>`;

const userInfoCard = (user, memeCount) => html`
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
        <div class="user-content">
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${memeCount}</p>
        </div>
    </article>
`;
const memeCard = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>
`;

async function loadData(myProfilePromise) {
    const data = await myProfilePromise;

    return profileCard(data.meme, data.meme.length, data.userData);
}