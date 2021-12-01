import { formDataHome, element as e } from './lib/dom.js';
import { request } from './lib/request.js';
import { showComments } from './comments.js';

const homePage = document.getElementById('homePage');
const commentsPage = document.getElementById('commentsPage');
const allTopics = document.getElementById('allTopics');

const form = document.getElementById('topicForm');
form.querySelector('.cancel').addEventListener('click', onCancel);
form.addEventListener('submit', onSubmit);

document.getElementById('homeLink').addEventListener('click', showHomePage);

function showHomePage() {
    homePage.style.display = 'block';
    commentsPage.style.display = 'none';

    loadTopics();
}

function showCommentsPage(e, post) {
    e.preventDefault();
    commentsPage.style.display = 'block';
    homePage.style.display = 'none';

    showComments(post);
}

function onCancel(e) {
    e.preventDefault();
    form.reset();
}

async function onSubmit(e) {
    e.preventDefault();

    const data = formDataHome(form);

    await postTopic(data);
    allTopics.appendChild(template(data));
}

async function loadTopics() {
    const data = await request('/jsonstore/collections/myboard/posts', {
        method: 'get'
    });

    allTopics.replaceChildren(...Object.values(data).map(template));
}

async function postTopic(data) {
    return await request('/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

function template(post) {
    const date = new Date(post.date).toUTCString();
    return e('div', { className: 'topic-container' },
        e('div', { className: 'topic-name-wrapper' },
            e('input', { type: 'hidden', value: post._id }),
            e('div', { className: 'topic-name' },
                e('a', { className: 'normal', href: 'javascript:void(0)', onclick: (e) => showCommentsPage(e, post) },
                    e('h2', {}, post.title)
                ),
                e('div', { className: 'columns' },
                    e('div', {},
                        e('p', {}, 'Date: ',
                            e('time', {}, date)
                        ),
                        e('div', { className: 'nick-name' },
                            e('p', {}, 'Username: ',
                                e('span', {}, post.username)
                            )
                        )
                    )
                )
            )
        )
    );
}

showHomePage();