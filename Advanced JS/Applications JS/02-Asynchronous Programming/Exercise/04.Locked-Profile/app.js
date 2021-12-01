async function getProfiles() {
    try {
        const url = 'http://localhost:3030/jsonstore/advanced/profiles';

        const res = await fetch(url);
        if (res.status != 200) { throw new Error(`${res.status} ${res.statusText}`); }

        return await res.json();
    } catch (err) {
        console.error(err.message);
    }
}

function template({ username, email, age }, id) {
    return elem('div', { className: 'profile' },
        elem('img', { src: './iconProfile2.png', className: 'userIcon' }),
        elem('label', {}, 'Lock'),
        elem('input', { type: 'radio', name: `user${id}Locked`, value: 'lock', checked: true }),
        elem('label', {}, 'Unlock'),
        elem('input', { type: 'radio', name: `user${id}Locked`, value: 'unlock', checked: false }),
        elem('br', {}),
        elem('hr', {}),
        elem('label', {}, 'Username'),
        elem('input', { type: 'text', name: 'user1Username', value: username, disabled: true, readonly: true }),
        elem('div', { id: `user${id}HiddenFields` },
            elem('label', {}, 'Email:'),
            elem('input', { type: 'email', name: `user${id}Email`, value: email, disabled: true, readonly: true }),
            elem('label', {}, 'Age:'),
            elem('input', { type: 'email', name: `user${id}Age`, value: age, disabled: true, readonly: true }),
        ),
        elem('button', { onclick: onToggle }, 'Show more')
    );
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

function onToggle(e) {
    const button = e.target;
    const profile = button.parentElement;
    const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
    if (isActive) {
        const info = Array
            .from(profile.getElementsByTagName('div'))
            .find(d => d.id.includes('HiddenFields'));

        button.textContent = button.textContent == 'Show more' ? 'Hide it' : 'Show more';
        info.style.display = info.style.display == 'block' ? 'none' : 'block';
    }
}

async function lockedProfile() {
    const output = document.getElementById('main');
    const profiles = await getProfiles();
    output.replaceChildren();
    Object.values(profiles).forEach((x, i) => { output.appendChild(template(x, i + 1)); });
}
document.addEventListener('DOMContentLoaded', lockedProfile);
