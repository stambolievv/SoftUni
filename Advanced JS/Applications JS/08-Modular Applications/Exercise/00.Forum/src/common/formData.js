function formDataInputs(form, ...fields) {
    const formData = new FormData(form);

    const inputs = {};

    for (const field of fields) {
        inputs[field] = formData.get(field).trim();
    }

    const errors = Object
        .entries(inputs)
        .reduce((a, [k, v]) => Object.assign(a, { [k]: (k != 'material' && v == '') }), {});

    const missing = Object
        .values(errors)
        .filter(v => v == true).length;

    if (missing > 0) { handleError('All fields must be filled!'); }

    if (inputs.password && inputs.password.length < 6 && inputs.repass) {
        Object.assign(errors, { password: true });
        handleError('Passwords must be at least 6 characters long!');
    }

    if (inputs.password != inputs.repass && inputs.repass) {
        Object.assign(errors, { password: true, repass: true });
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

export {
    formDataInputs
};
