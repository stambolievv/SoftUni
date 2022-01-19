const overlay = document.createElement('div');
overlay.className = 'overlay';

const modal = document.createElement('div');
modal.className = 'modal';

const message = document.createElement('p');

const actions = document.createElement('div');

const actionOk = document.createElement('a');
actionOk.textContent = 'OK';
actionOk.href = 'javascript:void(0)';
actionOk.style.padding = '48px';
actions.appendChild(actionOk);

const actionCancel = document.createElement('a');
actionCancel.textContent = 'Cancel';
actionCancel.href = 'javascript:void(0)';
actionCancel.style.padding = '48px';
actions.appendChild(actionCancel);

actions.style.display = 'inline-block';

modal.appendChild(message);
modal.appendChild(actions);

overlay.appendChild(modal);

actionOk.addEventListener('click', () => onChoice(true));
actionCancel.addEventListener('click', () => onChoice(false));

let onChoice = null;

export function showModal(msg) {
    message.textContent = msg;
    document.body.appendChild(overlay);
    return new Promise(callback => {
        onChoice = (choice) => {
            clear();
            callback(choice);
        };
    });
}

function clear() {
    overlay.remove();
}