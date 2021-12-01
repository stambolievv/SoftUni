import { html, nothing } from '../lib/lib.js';

const templateTown = (data) => html`<li class=${data.match ? 'active' : nothing}>${data.name}</li>`;

export const template = (towns) => html`<ul>${towns.map(templateTown)}</ul>`;