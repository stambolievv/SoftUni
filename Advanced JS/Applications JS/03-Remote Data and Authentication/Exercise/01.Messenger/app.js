const textarea = document.getElementById('messages');
const authorInput = document.querySelector('[name="author"]');
const contentInput = document.querySelector('[name="content"]');

async function onSubmit() {
    const author = authorInput.value;
    const content = contentInput.value;

    await createMessages({ author, content });

    contentInput.value = '';
    textarea.value += `\n${author}: ${content}`;
}

async function createMessages(message) {
    return await request('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
    });
}

async function readMessages() {
    const data = await request('http://localhost:3030/jsonstore/messenger', {
        method: 'get'
    });

    const messages = Object.values(data);

    textarea.value = messages
        .map(({ author, content }) => `${author}: ${content}`)
        .join('\n');
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.status != 200) { throw new Error(`${response.status} ${response.statusText}`); }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error.message);
    }
}

function elem(type, props, ...content) {
    const element = document.createElement(type);
    for (const prop in props) {
        element[prop] = props[prop];
    }
    for (let entry of content) {
        if (typeof entry == 'string' || typeof entry == 'number') {
            entry = document.createTextNode(entry);
        }
        element.appendChild(entry);
    }
    return element;
}

document.getElementById('refresh').addEventListener('click', readMessages);
document.getElementById('submit').addEventListener('click', onSubmit);
window.addEventListener('DOMContentLoaded', readMessages);