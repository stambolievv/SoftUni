window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);

    const collection = document.getElementsByClassName('all-hits-container')[0];

    function add(e) {
        e.preventDefault();
        genre.value.trim();
        name.value.trim();
        author.value.trim();
        date.value.trim();

        if (genre.value != '' && name.value != '' && author.value != '' && date.value != '') {
            const div = elem('div', { className: 'hits-info' },
                elem('img', { src: './static/img/img.png' }),
                elem('h2', {}, `Genre: ${genre.value}`),
                elem('h2', {}, `Name: ${name.value}`),
                elem('h2', {}, `Author: ${author.value}`),
                elem('h3', {}, `Date: ${date.value}`),
                elem('button', { className: 'save-btn' }, 'Save song'),
                elem('button', { className: 'like-btn' }, 'Like song'),
                elem('button', { className: 'delete-btn' }, 'Delete')
            );
            div.addEventListener('click', onClick);
            collection.appendChild(div);
            genre.value = '';
            name.value = '';
            author.value = '';
            date.value = '';
        }
    }

    function onClick(e) {
        if (e.target.tagName == 'BUTTON' && e.target.className == 'save-btn') {
            document.querySelector('#saved-hits>.saved-container').appendChild(e.target.parentElement);
            const [save, like, del] = e.target.parentElement.querySelectorAll('button');
            save.remove();
            like.remove();
        } else if (e.target.tagName == 'BUTTON' && e.target.className == 'like-btn') {
            const point = document.querySelector('#total-likes .likes p');
            let [text, value] = point.textContent.split(': ');
            value = Number(value) + 1;
            point.textContent = text + ': ' + value;
            e.target.disabled = true;
        } else if (e.target.tagName == 'BUTTON' && e.target.className == 'delete-btn') {
            e.target.parentElement.remove();
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
}