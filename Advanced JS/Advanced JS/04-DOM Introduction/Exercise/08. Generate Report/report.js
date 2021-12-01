function generateReport() {
    const checkButtons = document.querySelectorAll('thead tr th input');
    const table = document.querySelectorAll('tbody tr');

    const buttons = [];
    Array.from(checkButtons).forEach((btn, i) => {
        buttons.push({ [btn.name]: btn.checked });
    });

    const result = [];
    for (let row = 0; row < table.length; row++) {
        const obj = {};
        for (let col = 0; col < table[row].children.length; col++) {
            const [type, bool] = Object.entries(buttons[col])[0];
            if (bool) {
                obj[type] = table[row].children[col].textContent;
            }
        }
        result.push(obj);
    }
    document.getElementById('output').value = JSON.stringify(result);
}