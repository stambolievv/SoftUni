import { element as e } from '../lib/dom.js';
import { getSessionUser } from '../lib/api/data.js';
import { get } from '../lib/api/api.js';

const section = document.getElementById('home-page');
section.remove();

const catalog = section.querySelector('.card-deck.d-flex.justify-content-center');

section.querySelector('#createLink').addEventListener('click', (e) => {
    e.preventDefault();
    const loggedUser = getSessionUser('currentUser');
    if (loggedUser != null) { ctx.goTo('create'); }
});

let ctx = null;

export function showHome(ctxTarget) {
    ctx = ctxTarget;
    ctx.showSection(section);
    readMovies();
}

async function readMovies() {
    catalog.replaceChildren(e('p', {}, 'Loading...'));

    const data = await get('/data/movies');

    catalog.replaceChildren(...data.map(m => template(m)));
}

function template(movie) {
    return e('div', { className: 'card mb-4' },
        e('img', { className: 'card-img-top', src: movie.img, alt: 'Card image cap', width: '400' }),
        e('div', { className: 'card-body' },
            e('h4', { className: 'card-title' }, movie.title)
        ),
        e('div', { className: 'card-footer' },
            e('a', { href: 'javascript:void(0)', onclick: () => ctx.goTo('details', movie._id) },
                e('button', { type: 'button', className: 'btn btn-info' }, 'Details')
            )
        ),
    );
}
