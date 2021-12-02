import { html } from '../../lib/lib.js';

export const template = (onSubmit, errors) => html`
    <!-- Create Meme Page ( Only for logged users ) -->
    <section id="create-meme">
        <form @submit=${onSubmit} id="create-form">
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title"
                    class=${errors.type?.title ? 'error': '' }>
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"
                    class=${errors.type?.description ? 'error': '' }></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl"
                    class=${errors.type?.imageUrl ? 'error': '' }>
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>
`;