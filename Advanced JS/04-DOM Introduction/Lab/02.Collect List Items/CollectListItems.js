function extractText() {
    const items = document.getElementById('items').children;
    const result = Array.from(items).map(el => el.textContent).join('\n');
    // const result = [];
    // for (const item of Array.from(items)) {
    //     result.push(item.textContent)
    // }
    document.getElementById('result').value = result;
}