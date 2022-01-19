import { html } from '../lib/lib.js';

const templateItem = (i) => html`<option value=${i._id}>${i.text}</option>`;

export const template = (items) => html`<select id="menu">${items.map(templateItem)}</select>`;