export function createTimer() {
    const output = document.getElementById('timer');
    let lastTime = performance.now();
    let elapsed = 0;

    let active = true;

    tick(lastTime);

    return {
        pause,
        resume
    }

    function pause() {
        active = false;
    }

    function resume() {
        active = true;
        lastTime = performance.now();
        tick(lastTime);
    }

    function tick(time) {
        const delta = time - lastTime;
        elapsed += delta;
        lastTime = time;

        const total = elapsed / 1000;
        const seconds = total % 60;
        const minutes = (total / 60) % 60;
        const hours = total / 3600;

        output.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
        if (active) {
            requestAnimationFrame(tick);
        }
    }
}

function formatTime(value) {
    return ('0' + Math.floor(value)).slice(-2);
}