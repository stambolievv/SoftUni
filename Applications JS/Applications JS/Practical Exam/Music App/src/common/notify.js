const section = document.createElement('section');
section.id = 'notifications';

const div = document.createElement('div');
div.className = 'notification';

const span = document.createElement('span');

div.appendChild(span);
section.appendChild(div);
document.body.appendChild(section);

export function showNotify(message, type = 'errorBox') {
    div.id = type;
    span.textContent = message;
    div.style.display = 'block';
    div.style.opacity = 1;

    setTimeout(() => {
        const fadeEffect = setInterval(() => {
            if (div.style.opacity > 0) {
                div.style.opacity -= 0.05;
            } else {
                clearInterval(fadeEffect);
                span.remove();
                div.style.display = 'none';
            }
        }, 30);
    }, 3000);

}