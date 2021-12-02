import { html, until } from '../../lib/lib.js';
import { spinner } from '../../common/spinner.js';

export const template = (memePromise) => html`
    <!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
    <section id="edit-meme">
        ${until(loadData(memePromise), spinner())}
    </section>
`;

const teamCard = (meme, onSubmit) => html`
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"
                .value=${meme.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
`;

async function loadData(memePromise) {
    const data = await memePromise;
    return teamCard(data.meme, data.onSubmit);
}