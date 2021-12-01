function notify(message) {
  const result = document.getElementById('notification');
  result.textContent = message;
  result.style.display = 'block';
  result.addEventListener('click', (e) => result.style.display = 'none');
}