const phonebook = document.getElementById('phonebook');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');

async function onCreate() {
    const person = personInput.value;
    const phone = phoneInput.value;

    const contact = await createContacts({ person, phone });

    phonebook.appendChild(template(contact));
}

async function createContacts(contact) {
    return await request('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    });
}

async function readContacts() {
    const data = await request('http://localhost:3030/jsonstore/phonebook', {
        method: 'get'
    });

    phonebook.replaceChildren(...Object.values(data).map(c => template(c)));
}

async function deleteContact(e, id) {
    return await request('http://localhost:3030/jsonstore/phonebook/' + id, {
        method: 'delete'
    });
}


function template(contact) {
    return elem('li', {}, `${contact.person}: ${contact.phone}`,
        elem('button', {
            onclick: (e) => {
                deleteContact(e, contact._id);
                e.target.parentElement.remove();
            }
        }, 'Delete'),
    );
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

document.getElementById('btnLoad').addEventListener('click', readContacts);
document.getElementById('btnCreate').addEventListener('click', onCreate);
window.addEventListener('DOMContentLoaded', readContacts);