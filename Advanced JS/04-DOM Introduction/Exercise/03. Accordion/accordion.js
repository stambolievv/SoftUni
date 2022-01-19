function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    const text = document.getElementById('extra');
    btn.textContent = btn.textContent == 'More' ? 'Less' : 'More';
    text.style.display = text.style.display == 'block' ? 'none' : 'block';
    // if (btn.textContent == 'More') {
    //     text.style.display = 'block';
    //     btn.textContent = 'Less';
    // } else {
    //     text.style.display = 'none';
    //     btn.textContent = 'More';
    // }
}