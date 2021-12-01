import { render } from './lib/lib.js';
import { template } from './templates/template.js';
import { contacts } from './data/contacts.js';

function init() {
    const container = document.getElementById('contacts');
    const value = contacts.map(a => template(a, onDetails));

    render(value, container);
}
init();

function onDetails(e) {
    e.preventDefault();
    const info = e.target.nextElementSibling;
    info.style.display = info.style.display == 'block' ? 'none' : 'block';
}