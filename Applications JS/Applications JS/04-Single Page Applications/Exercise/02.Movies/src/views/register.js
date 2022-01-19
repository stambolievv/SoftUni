import { formDataInputs } from '../lib/dom.js';
import { register } from '../lib/api/data.js';

const section = document.getElementById('form-sign-up');
section.remove();

const form = section.querySelector('form');
form.addEventListener('submit', onRegister);

let ctx = null;

export function showRegister(ctxTarget) {
    ctx = ctxTarget;
    ctx.showSection(section);
}

async function onRegister(e) {
    e.preventDefault();

    const values = formDataInputs(form);
    await register(values);

    ctx.updateNav();
    ctx.goTo('home');
}