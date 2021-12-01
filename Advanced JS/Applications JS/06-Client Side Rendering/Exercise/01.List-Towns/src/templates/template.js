import { html } from '../lib/lib.js';

export const townsTemplate = (data) => html`
    <ul>
        ${data.map(t => html`<li>${t}</li>`)}
    </ul>
`;

