function attachGradientEvents() {
    const result = document.getElementById('result');

    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);

    function onMove(ev) {
        result.textContent = `${Math.floor(ev.offsetX / ev.target.clientWidth * 100)}%`;
    }
}