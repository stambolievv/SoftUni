function solve() {
  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  const sections = document.getElementsByTagName('section');
  const result = document.getElementById('results');
  let rightAnswered = 0;
  let index = 0;

  Array
    .from(document.getElementsByClassName('answer-text'))
    .map((b) => b.addEventListener('click', (e) => {

      sections[index].style.display = 'none';

      if (correctAnswers.includes(e.target.textContent)) { rightAnswered++; }

      if (sections[index + 1] !== undefined) {
        sections[index + 1].style.display = 'block';
        index++;
      } else {
        result.style.display = 'block';
        const h1 = result.lastElementChild.lastElementChild;
        h1.textContent = rightAnswered !== 3 ? `You have ${rightAnswered} right answers` : 'You are recognized as top JavaScript fan!';
      }
    }));
}
