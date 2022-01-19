import { formDataInputs } from '../lib/dom.js';
import { login } from '../lib/api/data.js';

const section = document.getElementById('form-login');
section.remove();

const form = section.querySelector('form');
form.addEventListener('submit', onLogin);

let ctx = null;

export function showLogin(ctxTarget) {
    ctx = ctxTarget;
    ctx.showSection(section);
}

async function onLogin(e) {
    e.preventDefault();

    const { email, password } = formDataInputs(form);
    await login({ email, password });

    ctx.updateNav();
    ctx.goTo('home');
}
