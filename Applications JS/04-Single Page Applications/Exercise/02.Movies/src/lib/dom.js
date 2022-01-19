function showSection(section) {
    document.querySelector('main').replaceChildren(section);
}

function formDataInputs(form) {
    const formData = new FormData(form);

    const inputFields = Array
        .from(formData.entries())
        .map(([k, v]) => [k, v.trim()])
        .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

    if (Object.values(inputFields).some(x => x == '')) { handleError('All fields must be filled'); }
    if (inputFields.password && inputFields.password.length < 6 && inputFields.repeatPassword) { handleError('Passwords must be at least 6 characters long!'); }
    if (inputFields.repeatPassword && inputFields.password != inputFields.repeatPassword) { handleError('Passwords does not match!'); }
    if (inputFields.imageUrl) { delete Object.assign(inputFields, { ['img']: inputFields['imageUrl'] })['imageUrl']; }

    function handleError(errorMessage) {
        form.reset();
        alert(errorMessage);
        throw new Error(errorMessage);
    }

    form.reset();

    return inputFields;
}

function element(type, props, ...content) {
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


export {
    showSection,
    formDataInputs,
    element
};