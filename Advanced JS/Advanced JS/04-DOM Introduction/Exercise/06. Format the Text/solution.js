function solve() {
  const textArea = document.getElementById('input').value;
  const splittedText = textArea.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 1);
  const output = document.getElementById('output');
  for (let i = 0; i < splittedText.length; i += 3) {
    const arr = [];
    for (let j = 0; j < 3; j++) {
      if (splittedText[i + j]) {
        arr.push(splittedText[i + j]);
      }
    }
    output.innerHTML += `<p>${arr.join('.')}.</p>`;
  }
}