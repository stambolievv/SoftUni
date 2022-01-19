import { html, until } from '../lib/lib.js';

export const catalogTemplate = (dataPromise) => html`
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${until(dataPromise, html`
            <tr>
                <td colSpan="3">Loading&hellip;</td>
            </tr>
            `)}
        </tbody>
    </table>
`;

export const bookTemplate = (book, onEdit, onDelete) => html`
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button @click=${onEdit}>Edit</button>
            <button @click=${onDelete}>Delete</button>
        </td>
    </tr>
`;