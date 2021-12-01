function solve() {
   document.getElementById('searchBtn').addEventListener('click', onClick);
   function onClick() {
      const input = document.getElementById('searchField').value;
      const searchText = input.toLowerCase();
      const tableElements = Array.from(document.querySelectorAll('tbody tr'));
      tableElements.forEach(element => {
         const text = element.textContent.toLowerCase();
         if (text.includes(searchText)) {
            element.classList.add('select');
         } else {
            element.classList.remove('select');
         }
      });
      input.value = '';
   }
}