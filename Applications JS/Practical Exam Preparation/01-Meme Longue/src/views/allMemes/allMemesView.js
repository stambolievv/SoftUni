import { html, until } from '../../lib/lib.js';
import { spinner } from '../../util/spinner.js';

export const template = (memePromise) => html`
    <!--All Memes Page( for Guests and Users)-->
    <section id="meme-feed">
        <h1>All Memes</h1>
        <div id="memes">
            ${until(loadData(memePromise), spinner())}
        </div>
    </section>
`;


const memeCard = (meme) => html`
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${meme.title}</p>
                <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
            </div>
            <div id="data-buttons">
                <a class="button" href="/details/${meme._id}">Details</a>
            </div>
        </div>
    </div>
`;

const noMemeCard = () => html`<p class="no-memes">No memes in database.</p>`;

async function loadData(memePromise) {
    const data = await memePromise;

    if (data.length == 0) {
        return noMemeCard();
    } else {
        return data.map(memeCard);
    }
}

