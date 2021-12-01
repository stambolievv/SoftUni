function passwordValidator(pass) {
    function betweenTwoAndSix(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        }
    }

    function onlyLetterOrDigits(string) {
        for (let iterator of string) {
            let charAsCode = iterator.charCodeAt(0);
            if (!(charAsCode >= 48 && charAsCode <= 57) &&
                !(charAsCode >= 65 && charAsCode <= 90) &&
                !(charAsCode >= 97 && charAsCode <= 122)) {
                return false;
            }
        }
        return true;
    }

    function atleastTwoDigit(string) {
        let counter = 0;
        for (let iterator of string) {
            let charAsCode = iterator.charCodeAt(0);
            (charAsCode >= 48 && charAsCode <= 57) ? counter++ : null;
        }
        return counter >= 2;
    }

    if (onlyLetterOrDigits(pass) && atleastTwoDigit(pass) && betweenTwoAndSix(pass)) {
        console.log('Password is valid');
    } else {
        if (!betweenTwoAndSix(pass)) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!onlyLetterOrDigits(pass)) {
            console.log('Password must consist only of letters and digits');
        }
        if (!atleastTwoDigit(pass)) {
            console.log('Password must have at least 2 digits');
        }
    }
}
passwordValidator('MyPass123');