import { html, until } from '../../lib/lib.js';
import { spinner } from '../../common/spinner.js';

export const template = (bookPromise) => html`
    <!-- Edit Page ( Only for the creator )-->
    <section id="edit-page" class="edit">
        ${until(loadData(bookPromise), spinner())}
    </section>
`;

const teamCard = (book, onSubmit) => html`
<form @submit=${onSubmit} id="edit-form" action="#" method="">
    <fieldset>
        <legend>Edit my Book</legend>
        <p class="field">
            <label for="title">Title</label>
            <span class="input">
                <input type="text" name="title" id="title" .value=${book.title}>
            </span>
        </p>
        <p class="field">
            <label for="description">Description</label>
            <span class="input">
                <textarea name="description" id="description" .value=${book.description}></textarea>
            </span>
        </p>
        <p class="field">
            <label for="image">Image</label>
            <span class="input">
                <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
            </span>
        </p>
        <p class="field">
            <label for="type">Type</label>
            <span class="input">
                <select id="type" name="type" .value=${book.type}>
                    <option value="Fiction">Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Mistery">Mistery</option>
                    <option value="Classic">Classic</option>
                    <option value="Other">Other</option>
                </select>
            </span>
        </p>
        <input class="button submit" type="submit" value="Save">
    </fieldset>
</form>
`;

async function loadData(bookPromise) {
    const data = await bookPromise;
    return teamCard(data.book, data.onSubmit);
}