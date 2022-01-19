import { element as e } from '../lib/dom.js';
import { get } from '../lib/api/api.js';

const section = document.getElementById('dashboard-holder');
section.remove();

let ctx = null;

export function showCatalog(ctxTarget) {
    ctx = ctxTarget;
    ctx.showSection(section);

    loadIdeas();
}

async function loadIdeas() {
    section.replaceChildren(e('p', {}, 'Loading...'));

    const ideas = await get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');

    if (ideas.length == 0) {
        section.appendChild(e('h1', {}, 'No ideas yet! Be the first one :)'));
    } else {
        const fragment = document.createDocumentFragment();
        ideas.map(template).forEach(i => fragment.appendChild(i));
        section.replaceChildren(fragment);
    }
}


function template(idea) {
    return e('div', { className: 'card overflow-hidden current-card details', style: 'width: 20rem; height: 18rem;' },
        e('div', { className: 'card-body' },
            e('p', { className: 'card-text' }, idea.title)
        ),
        e('img', { className: 'card-image', src: idea.img, alt: 'Card image cap' }),
        e('a', {
            id: idea._id, className: 'btn', href: '', onclick: (e) => {
                e.preventDefault();
                ctx.goTo('detailsLink', idea._id);
            }
        }, 'Details')
    );
}
