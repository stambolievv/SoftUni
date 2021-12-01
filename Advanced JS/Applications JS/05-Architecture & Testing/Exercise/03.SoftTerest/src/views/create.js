import { formDataInputs } from '../lib/dom.js';
import { post } from '../lib/api/api.js';

const section = document.getElementById('createPage');
section.remove();

const form = section.querySelector('form');
form.addEventListener('submit', onCreate);

let ctx = null;

export function showCreate(ctxTarget) {
    ctx = ctxTarget;
    ctx.showSection(section);
}

async function onCreate(e) {
    e.preventDefault();

    const values = formDataInputs(form);
    await post('/data/ideas', values);

    ctx.goTo('catalogLink');
}
