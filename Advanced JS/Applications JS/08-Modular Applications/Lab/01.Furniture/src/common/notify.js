const element = document.createElement('div');
element.id = 'notification';

const msg = document.createElement('span');
const close = document.createElement('span');
close.innerHTML = '&#10006';

element.appendChild(msg);
element.appendChild(close);

export function notify(message) {
    msg.textContent = message;
    document.body.appendChild(element);

    setTimeout(clear, 5000);
}

element.addEventListener('click', clear);

function clear() {
    element.remove();
}