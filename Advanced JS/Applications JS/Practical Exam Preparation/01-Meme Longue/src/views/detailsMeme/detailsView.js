import { html, until, nothing } from '../../lib/lib.js';
import { spinner } from '../../common/spinner.js';

export const template = (memePromise) => html`
    <!-- Details Meme Page (for guests and logged users) -->
    <section id="meme-details">
        ${until(loadData(memePromise), spinner())}
    </section>
`;

const memeCard = (meme, isOwner, onDelete) => html`
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${isOwner ? controlsTemplate(meme, onDelete) : nothing}
        </div>
    </div>
`;

const controlsTemplate = (meme, onDelete) => html`
    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
    <a class="button warning" href="/edit/${meme._id}">Edit</a>
    <button @click=${onDelete} class="button danger">Delete</button>
`;

async function loadData(memePromise) {
    const data = await memePromise;
    return memeCard(data.meme, data.isOwner, data.onDelete);
}
