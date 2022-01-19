import { html } from '../lib/lib.js';

const catTemplate = (data, eventCallback) => html`
    <li>
        <img src="./static/images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${() => eventCallback(data)}>Show status code</button>
            ${data.info ? infoTemplate(data) : null}
        </div>
    </li>
 `;

const infoTemplate = (data) => html`
    <div class="status" style="display: block" id=${data.id}>
        <h4 class="card-title">Status Code: ${data.statusCode}</h4>
        <p class="card-text">${data.statusMessage}</p>
    </div>
`;

export const catsTemplate = (data, eventCallback) => html`<ul>${data.map(c => catTemplate(c, eventCallback))}</ul>`;
