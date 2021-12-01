function matchPhoneNumber(numbers) {
    let pattern = /\+([359]+)([-| ])2(\2)(\d{3})(\2)(\d{4})\b/g;
    let validPhones = [];
    let match = pattern.exec(numbers);
    while (match != null) {
        validPhones.push(match[0]);
        match = pattern.exec(numbers);
    }
    console.log(validPhones.join(' '));
}
matchPhoneNumber('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222');