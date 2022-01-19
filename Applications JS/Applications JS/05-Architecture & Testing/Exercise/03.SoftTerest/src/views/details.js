import { element as e } from '../lib/dom.js';
import { getSessionUser } from '../lib/api/data.js';
import { get, del } from '../lib/api/api.js';

const section = document.getElementById('detailsPage');
section.remove();

let ctx = null;

export function showDetails(ctxTarget, id) {
    ctx = ctxTarget;
    ctx.showSection(section);
    loadIdeaById(id);
}

async function loadIdeaById(id) {
    section.replaceChildren(e('p', {}, 'Loading...'));

    const idea = await get(`/data/ideas/${id}`);

    section.replaceChildren(template(idea));
}

function template(idea) {
    const fragment = document.createDocumentFragment();

    const image = e('img', { className: 'det-img', src: idea.img });
    const desc = e('div', { className: 'desc' },
        e('h2', { className: 'display-5' }, idea.title),
        e('p', { className: 'infoType' }, 'Description:'),
        e('p', { className: 'idea-description' }, idea.description),
    );
    const delBtn = e('div', { className: 'text-center' },
        e('a', {
            className: 'btn detb', href: '', onclick: async (e) => {
                e.preventDefault();
                const confirmed = confirm('Are you sure you want to delete this idea?');
                if (confirmed) {
                    await del(`/data/ideas/${idea._id}`);
                    ctx.goTo('catalogLink');
                }
            }
        }, 'Delete')
    );

    fragment.appendChild(image);
    fragment.appendChild(desc);

    const loggedUser = getSessionUser('currentUser');
    if (loggedUser != null && loggedUser.id == idea._ownerId) { fragment.appendChild(delBtn); }


    return fragment;
}