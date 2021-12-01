function solve() {
    const input = document.getElementById('input');
    const output = document.getElementById('result');

    const toSelection = document.getElementById('selectMenuTo');

    const binary = document.createElement('option');
    binary.setAttribute('value', 'binary');
    binary.textContent = 'Binary';

    const hexadecimal = document.createElement('option');
    hexadecimal.setAttribute('value', 'hexadecimal');
    hexadecimal.textContent = 'Hexadecimal';

    toSelection.appendChild(binary);
    toSelection.appendChild(hexadecimal);

    document.querySelector('button').addEventListener('click', (e) => {
        if (toSelection.value == 'binary') {
            output.value = Number(input.value).toString(2);
        } else if (toSelection.value == 'hexadecimal') {
            output.value = Number(input.value).toString(16).toUpperCase();
        } else {
            output.value = '';
        }
    });
}