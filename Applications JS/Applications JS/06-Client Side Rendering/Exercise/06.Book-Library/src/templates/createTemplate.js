import { html } from '../lib/lib.js';

export const createTemplate = (eventCallback, context) => html`
    <form @submit=${event => eventCallback(event, context)} id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
`;
