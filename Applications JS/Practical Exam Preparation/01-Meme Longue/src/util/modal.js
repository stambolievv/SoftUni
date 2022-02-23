const overlay = document.createElement('div');
overlay.className = 'overlay';

const modal = document.createElement('div');
modal.className = 'modal';

const msg = document.createElement('p');

const actions = document.createElement('div');

const actionOk = document.createElement('a');
actionOk.textContent = 'Yes';
actionOk.href = 'javascript:void(0)';
actions.appendChild(actionOk);

const actionCancel = document.createElement('a');
actionCancel.textContent = 'Cancel';
actionCancel.href = 'javascript:void(0)';
actions.appendChild(actionCancel);

actions.style.display = 'inline-block';

modal.appendChild(msg);
modal.appendChild(actions);

overlay.appendChild(modal);

actionOk.addEventListener('click', () => onChoice(true));
actionCancel.addEventListener('click', () => onChoice(false));

let onChoice = null;

export function showModal(message) {
    msg.textContent = message;
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

/* <div class="overlay">
    <div class="modal">
        <p>MESSAGE</p>
        <div>
            <a>Yes</a>
            <a>Cancel</a>
        </div>
    </div>
</div> */