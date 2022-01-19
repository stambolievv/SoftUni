const tbody = document.querySelector('#results>tbody');

function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    // const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
    // if (Object.values(data).every(x => x != '')) { }

    if ((firstName && isNaN(Number(firstName))) &&
        (lastName && isNaN(Number(lastName))) &&
        (facultyNumber && !isNaN(Number(facultyNumber))) &&
        (grade && !isNaN(Number(grade)))
    ) {
        const student = { firstName, lastName, facultyNumber, grade: Number(grade) };
        createStudents(student);
        tbody.appendChild(template(student));
    }

    e.target.reset();
}

async function createStudents(student) {
    return await request('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });
}

async function readStudents() {
    const student = await request('http://localhost:3030/jsonstore/collections/students', {
        method: 'get'
    });

    tbody.replaceChildren(...Object.values(student).map(s => template(s)));
}

function template(student) {
    return elem('tr', {},
        elem('th', {}, student.firstName),
        elem('th', {}, student.lastName),
        elem('th', {}, student.facultyNumber),
        elem('th', {}, student.grade),
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

document.getElementById('form').addEventListener('submit', onSubmit);
window.addEventListener('DOMContentLoaded', readStudents);
