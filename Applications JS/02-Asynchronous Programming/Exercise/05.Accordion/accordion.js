async function getArticle(id) {
    try {
        let url = 'http://localhost:3030/jsonstore/advanced/articles/';
        url += id ? `details/${id}` : 'list';

        const res = await fetch(url);
        if (res.status != 200) { throw new Error(`${res.status} ${res.statusText}`); }

        return await res.json();
    } catch (err) {
        console.error(err.message);
    }
}

function template(_id, title, content) {
    return elem('div', { className: 'accordion' },
        elem('div', { className: 'head' },
            elem('span', {}, title),
            elem('button', { className: 'button', id: _id, onclick: onToggle }, 'More')
        ),
        elem('div', { className: 'extra' },
            elem('p', {}, content)
        )
    );
}

function onToggle(e) {
    const btn = e.target;
    const text = e.target.parentElement.parentElement.lastElementChild;
    btn.textContent = btn.textContent == 'More' ? 'Less' : 'More';
    text.style.display = text.style.display == 'block' ? 'none' : 'block';
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

async function solution() {
    const output = document.getElementById('main');
    const listData = await getArticle();
    listData.forEach(async ({ _id, title }) => {
        const details = await getArticle(_id);
        output.appendChild(template(_id, title, details.content));
    });
}
document.addEventListener('DOMContentLoaded', solution);
