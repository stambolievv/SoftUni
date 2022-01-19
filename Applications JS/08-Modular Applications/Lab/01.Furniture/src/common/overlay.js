const element = document.createElement('div');
element.id = 'overlay';
element.innerHTML = `
<div id="modal">
    <p>Are you sure?</p>
    <div class="modal-ok">OK</div>
    <div class="modal-cancel">Cancel</div>
</div>`;

element.querySelector('.modal-ok').addEventListener('click', () => onChoice(true));
element.querySelector('.modal-cancel').addEventListener('click', () => onChoice(false));
const msg = element.querySelector('p');

let onChoice = null;

export function showModal(message) {
    msg.textContent = message;
    document.body.appendChild(element);
    return new Promise(callback => {
        onChoice = (choice) => {
            clear();
            callback(choice);
        };
    });
}


function clear() {
    element.remove();
}