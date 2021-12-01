function validate() {
    const mail = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    mail.addEventListener('change', (e) => {
        if (pattern.test(e.target.value)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    });
}