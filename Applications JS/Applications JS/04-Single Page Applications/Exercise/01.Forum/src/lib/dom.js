export function formDataHome(form) {
    const formData = new FormData(form);

    const title = formData.get('topicName').trim();
    const username = formData.get('username').trim();
    const description = formData.get('postText').trim();
    const date = Date.now();

    if (title == '' || username == '' || description == '') {
        form.reset();
        alert('All fields must be filled!');
        throw new Error('All fields must be filled!');
    }

    form.reset();

    return { title, username, description, date };
}

export function formDataComments(form) {
    const formData = new FormData(form);

    const username = formData.get('username').trim();
    const comment = formData.get('postText').trim();
    const date = Date.now();

    if (username == '' || comment == '') {
        form.reset();
        alert('All fields must be filled!');
        throw new Error('All fields must be filled!');
    }

    form.reset();

    return { username, comment, date };
}

export function element(type, props, ...content) {
    const element = document.createElement(type);

    for (const prop in props) {
        element[prop] = props[prop];
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);
    content.forEach(entry => {
        if (typeof entry == 'string' || typeof entry == 'number') {
            const node = document.createTextNode(entry);
            element.appendChild(node);
        } else {
            element.appendChild(entry);
        }
    });

    return element;
}