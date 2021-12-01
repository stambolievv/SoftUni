import { formDataComments, element as e } from './lib/dom.js';
import { request } from './lib/request.js';

const allComments = document.getElementById('allComments');

const form = document.getElementById('commentForm');
form.addEventListener('submit', onSubmit);

let postId = null;

export function showComments(post) {
    postId = post._id;

    allComments.replaceChildren(templateTopic(post));
    loadAllComments();
}

async function onSubmit(e) {
    e.preventDefault();

    const data = formDataComments(form);

    await postComment({ ...data, postId });
    allComments.appendChild(templateComment(data));
}

async function loadAllComments() {
    const data = await loadComments();

    Object.values(data).forEach(c => {
        if (postId == c.postId) {
            return allComments.appendChild(templateComment(c));
        }
    });
}

async function loadComments() {
    return await request('/jsonstore/collections/myboard/comments', {
        method: 'get'
    });
}

async function postComment(data) {
    return await request('/jsonstore/collections/myboard/comments', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

function templateTopic({ username, description, date }) {
    const formattedDate = new Date(date).toUTCString();
    return e('div', { className: 'header' },
        e('img', { src: './static/profile.png', alt: 'avatar' }),
        e('p', {}, e('span', {}, username), ' posted on ', e('time', {}, formattedDate)),
        e('p', { className: 'post-content' }, description)
    );
}

function templateComment({ username, comment, date }) {
    const formattedDate = new Date(date).toUTCString();
    return e('div', { className: 'user-comment' },
        e('div', { className: 'topic-name' },
            e('p', {}, e('strong', {}, username), ' commented on ', e('time', {}, formattedDate)),
            e('div', { className: 'post-content' }, e('p', {}, comment))
        )
    );
}