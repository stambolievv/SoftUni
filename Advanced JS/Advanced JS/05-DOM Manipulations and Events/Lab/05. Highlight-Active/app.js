function focused() {
    Array
        .from(document.getElementsByTagName('input'))
        .forEach(field => {
            field.addEventListener('focus', ev => ev.target.parentNode.classList.add('focused'));
            field.addEventListener('blur', ev => ev.target.parentNode.classList.remove('focused'));
        });

    /** 
    const inputs = Array.from(document.getElementsByTagName('input'));
    for (const line of inputs) {
        line.addEventListener('focus', onFocus);
        line.addEventListener('blur', onBlur);
    }
    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }
    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
    */
}