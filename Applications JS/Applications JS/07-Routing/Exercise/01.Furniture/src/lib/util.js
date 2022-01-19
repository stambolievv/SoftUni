function formDataInputs(form) {
    const formData = new FormData(form);

    const inputs = Array
        .from(formData.entries())
        .reduce((a, [k, v]) => Object.assign(a, { [k]: v.trim() }), {});

    const errors = Object
        .entries(inputs)
        .reduce((a, [k, v]) => Object.assign(a, { [k]: (k != 'material' && v == '') }), {});

    const missing = Object
        .values(errors)
        .filter(v => v == true).length;

    if (missing > 0) { handleError('All fields must be filled!'); }

    if (inputs.password && inputs.password.length < 6 && inputs.rePass) {
        Object.assign(errors, { password: true });
        handleError('Passwords must be at least 6 characters long!');
    }
    if (inputs.password != inputs.rePass && inputs.rePass) {
        Object.assign(errors, { password: true, rePass: true });
        handleError('Passwords does not match!');
    }

    if (inputs.year) { inputs.year = Number(inputs.year); }
    if (inputs.price) { inputs.price = Number(inputs.price); }

    function handleError(errorMessage) {
        throw {
            errorData: inputs,
            errorMsg: new Error(errorMessage),
            errorType: errors
        };
    }

    form.reset();

    return inputs;
}

export {
    formDataInputs
};
