function addItem() {
    const textItem = document.getElementById('newItemText');
    const valueItem = document.getElementById('newItemValue');
    const option = document.createElement('option');

    option.value = valueItem.value;
    option.textContent = textItem.value;
    document.getElementById('menu').appendChild(option);

    textItem.value = '';
    valueItem.value = '';
}