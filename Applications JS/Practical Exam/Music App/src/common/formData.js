function formDataHandler(form, ...fields) {
    const formData = new FormData(form);

    const inputs = {};

    for (const field of fields) {
        inputs[field] = formData.get(field).trim();
    }

    const errors = Object
        .entries(inputs)
        .reduce((a, [k, v]) => Object.assign(a, { [k]: (k != '' && v == '') }), {});

    const missing = Object
        .values(errors)
        .filter(v => v == true).length;

    if (missing > 0) { handleError('All fields must be filled!'); }

    if (inputs.password != inputs['conf-pass'] && inputs['conf-pass']) {
        Object.assign(errors, { password: true, 'conf-pass': true });
        handleError('Passwords does not match!');
    }

    function handleError(message) {
        throw {
            errorMsg: new Error(message),
            errorType: errors,
            errorData: inputs
        };
    }

    form.reset();

    return inputs;
}

export { formDataHandler };
