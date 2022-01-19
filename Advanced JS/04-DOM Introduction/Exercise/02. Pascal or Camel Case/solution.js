function solve() {
  const text = document.getElementById('text').value;
  const currentCase = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');
  const words = text.split(' ');
  let str = '';
  if (currentCase == 'Camel Case') {
    str += words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      str += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  } else if (currentCase == 'Pascal Case') {
    for (let i = 0; i < words.length; i++) {
      str += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  } else {
    return result.textContent = 'Error!';
  }
  return result.textContent = str;
}