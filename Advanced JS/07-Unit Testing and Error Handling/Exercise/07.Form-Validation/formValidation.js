function validate() {
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();
        let isValid = true;
        const namePattern = /^[a-zA-Z0-9]{3,20}$/;
        const nameInput = document.getElementById('username');
        if (!namePattern.test(nameInput.value)) {
            nameInput.style.borderColor = 'red';
            isValid = false;
        } else {
            nameInput.style.borderColor = '';
        }

        const mailPattern = /^.*@.*\..*$/;
        const mailInput = document.getElementById('email');
        if (!mailPattern.test(mailInput.value)) {
            mailInput.style.borderColor = 'red';
            isValid = false;
        } else {
            mailInput.style.borderColor = '';
        }

        const passPattern = /^\w{5,15}$/;
        const passInput = document.getElementById('password');
        const confPassInput = document.getElementById('confirm-password');
        if (!passPattern.test(passInput.value) ||
            !passPattern.test(confPassInput.value) ||
            passInput.value !== confPassInput.value) {
            passInput.style.borderColor = 'red';
            confPassInput.style.borderColor = 'red';
            isValid = false;
        } else {
            passInput.style.borderColor = '';
            confPassInput.style.borderColor = '';
        }

        const checkBox = document.getElementById('company');
        if (checkBox.checked) {
            const compNumber = document.getElementById('companyNumber');
            if (Number(compNumber.value) < 1000 || Number(compNumber.value) >= 10000) {
                compNumber.style.borderColor = 'red';
                isValid = false;
            } else {
                compNumber.style.borderColor = '';
            }
        }

        const validText = document.getElementById('valid');
        if (isValid) {
            validText.style.display = 'block';
        } else {
            validText.style.display = 'none';
        }
    });

    document.getElementById('company').addEventListener('change', (e) => {
        const compInfo = document.getElementById('companyInfo');
        if (e.target.checked) {
            compInfo.style.display = 'block';
        } else {
            compInfo.style.display = 'none';
        }
    });
}

