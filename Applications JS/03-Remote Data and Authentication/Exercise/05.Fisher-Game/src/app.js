import { request } from './request.js';
import { element as e } from './element.js';

let loggedUser = null;

function loadContent() {
    loggedUser = JSON.parse(sessionStorage.getItem('user'));
    if (loggedUser == null) {
        document.getElementById('user').style.display = 'none';
    } else {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm .add').disabled = false;
        document.querySelector('.email>span').textContent = loggedUser.email;
    }

    document.querySelector('.load').addEventListener('click', readCatches);
    document.getElementById('addForm').addEventListener('submit', onSubmit);
    document.getElementById('logout').addEventListener('click', onLogout);

    readCatches();
}

async function onSubmit(e) {
    e.preventDefault();

    if (!loggedUser) { return window.location = './login.html'; }

    const formData = new FormData(e.target);
    const inputFields = Array
        .from(formData.entries())
        .map(([k, v]) => [k, v.trim()])
        .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

    if (Object.values(inputFields).some(x => x == '')) { throw new Error('All fields must be filled'); }

    await createCatches(inputFields);
    readCatches();

    e.target.reset();
}

async function onLogout(e) {
    e.preventDefault();
    await request('/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': loggedUser.token }
    });

    sessionStorage.clear();
    return window.location = './index.html';
}

async function createCatches(theCatch) {
    return await request('/data/catches', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': loggedUser.token
        },
        body: JSON.stringify(theCatch)
    });
}

async function readCatches() {
    const catches = await request('/data/catches', {
        method: 'get'
    });

    return document.getElementById('catches').replaceChildren(...catches.map(i => template(i)));
}

async function updateCatch(id, theCatch) {
    return await request('/data/catches/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': loggedUser.token
        },
        body: JSON.stringify(theCatch)
    });
}

async function deleteCatch(id) {
    return await request('/data/catches/' + id, {
        method: 'delete',
        headers: { 'X-Authorization': loggedUser.token }
    });
}

function template(theCatch) {
    const isOwner = !(loggedUser && loggedUser.id == theCatch._ownerId);
    return e('div', { className: 'catch' },
        e('label', {}, 'Angler'),
        e('input', { type: 'text', className: 'angler', value: theCatch.angler, disabled: isOwner },),
        e('label', {}, 'Weight'),
        e('input', { type: 'text', className: 'weight', value: theCatch.weight, disabled: isOwner },),
        e('label', {}, 'Species'),
        e('input', { type: 'text', className: 'species', value: theCatch.species, disabled: isOwner },),
        e('label', {}, 'Location'),
        e('input', { type: 'text', className: 'location', value: theCatch.location, disabled: isOwner },),
        e('label', {}, 'Bait'),
        e('input', { type: 'text', className: 'bait', value: theCatch.bait, disabled: isOwner },),
        e('label', {}, 'Capture Time'),
        e('input', { type: 'number', className: 'captureTime', value: theCatch.captureTime, disabled: isOwner },),
        e('button', {
            className: 'update', id: theCatch._id, disabled: isOwner, onclick: (e) => {
                e.preventDefault();
                const inputs = e.target.parentElement.getElementsByTagName('input');
                const data = Array.from(inputs).reduce((a, { className, value }) => Object.assign(a, { [className]: value }), {});
                updateCatch(theCatch._id, data);
            }
        }, 'Update'),
        e('button', {
            className: 'delete', id: theCatch._id, disabled: isOwner, onclick: (e) => {
                e.preventDefault();
                deleteCatch(theCatch._id);
                e.target.parentElement.remove();
            }
        }, 'Delete')
    );
}

window.addEventListener('DOMContentLoaded', loadContent);
