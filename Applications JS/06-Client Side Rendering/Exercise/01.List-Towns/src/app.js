import { render } from './lib/lib.js';
import { townsTemplate } from './templates/template.js';

const container = document.getElementById('root');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const data = document.getElementById('towns')
        .value
        .split(',')
        .map(t => t.trim());

    const value = townsTemplate(data);
    render(value, container);
});
