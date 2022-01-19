function addItem() {
    const list = document.getElementById('items');

    const inputText = document.getElementById('newItemText');

    const newItem = document.createElement('li');
    newItem.textContent = inputText.value;

    const btn = document.createElement('a');
    btn.href = '#';
    btn.textContent = '[Delete]';
    btn.addEventListener('click', deleteElement);

    newItem.appendChild(btn);
    list.appendChild(newItem);

    inputText.value = '';

    function deleteElement(ev) {
        ev.target.parentNode.remove();
        // this.parentNode.remove();
    }
}