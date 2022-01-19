function solve() {
  const table = document.querySelector('table.table tbody');
  const [inputText, outputText] = Array.from(document.getElementsByTagName('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(e) {
    const inputData = JSON.parse(inputText.value);

    for (const item of inputData) {
      const row = createElement('tr', {},
        createElement('td', {}, createElement('img', { src: item.img })),
        createElement('td', {}, createElement('p', {}, item.name)),
        createElement('td', {}, createElement('p', {}, item.price)),
        createElement('td', {}, createElement('p', {}, item.decFactor)),
        createElement('td', {}, createElement('input', { type: 'checkbox' }))
      );
      table.appendChild(row);
    }

    function createElement(type, props, ...content) {
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
  }

  function buy(e) {
    const furniture = Array
      .from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(b => b.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent)
      }));
    const bought = furniture.map(i => i.name);
    const totalPrice = furniture.reduce((a, c) => a + c.price, 0);
    const avgDecFactor = furniture.reduce((a, c) => a + c.decFactor, 0) / furniture.length;
    outputText.value = `Bought furniture: ${bought.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;
  }
}