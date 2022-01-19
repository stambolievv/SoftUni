function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange() {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (pattern.test(this.value)) {
            this.classList.remove('error');
        } else {
            this.classList.add('error');
        }
    }
}