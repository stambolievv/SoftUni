function addItem() {
    const list = document.getElementById('items');

    const inputText = document.getElementById('newItemText');

    const newItem = document.createElement('li');
    newItem.textContent = inputText.value;

    list.appendChild(newItem);

    inputText.value = '';
}