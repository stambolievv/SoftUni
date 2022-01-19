import { formDataInputs } from '../lib/dom.js';
import { put } from '../lib/api/api.js';

const section = document.getElementById('edit-movie');
section.remove();

const form = section.querySelector('form');
form.addEventListener('submit', onEdit);

let ctx = null;

export function showEdit(ctxTarget, movieData) {
    ctx = ctxTarget;

    ctx.showSection(section);

    section.querySelector('[name="id"]').value = movieData._id;
    section.querySelector('[name="title"]').value = movieData.title;
    section.querySelector('[name="description"]').value = movieData.description;
    section.querySelector('[name="imageUrl"]').value = movieData.img;
}

async function onEdit(e) {
    e.preventDefault();

    const values = formDataInputs(form);
    await put(`/data/movies/${values.id}`, values);

    ctx.goTo('home');
}