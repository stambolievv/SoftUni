import { element as e } from '../lib/dom.js';
import { getSessionUser } from '../lib/api/data.js';
import { get, post, del } from '../lib/api/api.js';

const section = document.getElementById('movie-example');
section.remove();

let ctx = null;

export function showDetails(ctxTarget, id) {
    ctx = ctxTarget;
    ctx.showSection(section);
    readMovie(id);
}

async function readMovie(movieId) {
    section.replaceChildren(e('p', {}, 'Loading...'));

    const requests = [
        get(`/data/movies/${movieId}`),
        get(`/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`)
    ];

    const loggedUser = getSessionUser('currentUser');
    if (loggedUser != null) {
        requests.push(get(`/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${loggedUser.id}%22`));
    }

    const [movie, likes, ownLike] = await Promise.all(requests);
    section.replaceChildren(template(movie, likes, ownLike));
}

function template(movie, likes, ownLike) {
    const controller = e('div', { className: 'col-md-4 text-center' },
        e('h3', { className: 'my-3' }, 'Movie Description'),
        e('p', {}, movie.description)
    );
    const likeBtn = e('a', { className: 'btn btn-primary', href: 'javascript:void(0)', onclick: onLike }, 'Like');
    const unlikeBtn = e('a', { className: 'btn btn-primary', href: 'javascript:void(0)', onclick: onUnlike }, 'Unlike');
    const totalLikes = e('span', { className: 'enrolled-span' }, `Liked ${likes}`);

    const loggedUser = getSessionUser('currentUser');
    if (loggedUser != null) {
        if (loggedUser.id == movie._ownerId) {
            controller.appendChild(e('a', { className: 'btn btn-danger', href: 'javascript:void(0)', onclick: onDelete }, 'Delete'));
            controller.appendChild(e('a', { className: 'btn btn-warning', href: 'javascript:void(0)', onclick: onEdit }, 'Edit'));
        } else {
            if (ownLike.length != 0) {
                controller.appendChild(unlikeBtn);
            } else {
                controller.appendChild(likeBtn);
            }
        }
    }
    controller.appendChild(totalLikes);

    return e('div', { className: 'container' },
        e('div', { className: 'row bg-light text-dark' },
            e('h1', {}, `Movie title: ${movie.title}`),
            e('div', { className: 'col-md-8' },
                e('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })
            ),
            controller
        )
    );

    async function onLike(e) {
        e.preventDefault();

        await post('/data/likes', { movieId: movie._id });

        totalLikes.textContent = `Liked ${likes += 1}`;
        likeBtn.replaceWith(unlikeBtn);
    }

    async function onUnlike(e) {
        e.preventDefault();

        await del(`/data/likes/${ownLike.pop()._id}`);

        totalLikes.textContent = `Liked ${likes -= 1}`;
        unlikeBtn.replaceWith(likeBtn);
    }

    async function onDelete(e) {
        e.preventDefault();

        const confirmed = confirm('Are you sure you want to delete this movie?');
        if (confirmed) {
            await del(`/data/movies/${movie._id}`);
            ctx.goTo('home');
        }
    }

    async function onEdit(e) {
        e.preventDefault();
        ctx.goTo('edit', movie);
    }
}