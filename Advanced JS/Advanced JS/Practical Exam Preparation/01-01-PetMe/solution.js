function solve() {
    // get references to elements of interest
    // configure event listeners
    const fields = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3],
    };

    addBtn.addEventListener('click', addPet);

    // # Add new pet
    // Read input fields
    // Validate values
    // Create new list item
    // Configure event listener for newly created element
    function addPet(event) {
        event.preventDefault();

        const name = input.name.value.trim();
        const age = Number(input.age.value.trim());
        const kind = input.kind.value.trim();
        const owner = input.owner.value.trim();

        if (name == '' || input.age.value.trim() == '' || Number.isNaN(age) || kind == '' || owner == '') {
            return;
        }

        const contactBtn = elem('button', {}, 'Contact with owner');

        const pet = elem('li', {},
            elem('p', {},
                elem('strong', {}, name),
                ' is a ',
                elem('strong', {}, age),
                ' year old ',
                elem('strong', {}, kind)
            ),
            elem('span', {}, `Owner: ${owner}`),
            contactBtn
        );

        contactBtn.addEventListener('click', contact);

        petList.appendChild(pet);

        input.name.value = '';
        input.age.value = '';
        input.kind.value = '';
        input.owner.value = '';

        // # Contact owner
        // Create confirmation div
        // Configure event listener for new button
        // Replace existing button with confirmation div
        function contact() {
            const confirmInput = elem('input', { placeholder: 'Enter your names' });
            const confirmBtn = elem('button', {}, 'Yes! I take it!');
            const confirmDiv = elem('div', {},
                confirmInput,
                confirmBtn
            );

            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));

            contactBtn.remove();
            pet.appendChild(confirmDiv);
        }
    }

    // # Adopt a pet
    // Read and validate input
    // Create new button for checking
    // Configure event listener for new button
    // Replace confirmation div with new button
    // Change text content of Owner span
    // Move element to other list
    function adopt(input, pet) {
        const newOwner = input.value.trim();

        if (newOwner == '') {
            return;
        }

        const checkBtn = elem('button', {}, 'Checked');
        checkBtn.addEventListener('click', check.bind(null, pet));

        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);

        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        adoptedList.appendChild(pet);
    }

    // # Checking of adopted pet
    // Remove element from DOM
    function check(pet) {
        pet.remove();
    }

}

function elem(type, props, ...content) {
    const element = document.createElement(type);
    for (const prop in props) {
        element[prop] = props[prop];
    }
    for (let entry of content) {
        if (typeof entry == 'string' || typeof entry == 'number') {
            entry = document.createTextNode(entry);
        }
        element.appendChild(entry);
    }
    return element;
}

