function create(words) {
   const content = document.getElementById('content');
   content.addEventListener('click', onclick);

   for (const word of words) {
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';

      const div = document.createElement('div');
      div.appendChild(para);

      content.appendChild(div);
   }

   function onclick(e) {
      if (e.target.tagName == 'DIV' && e.target.id != 'content') {
         e.target.firstChild.style.display = '';
      }
   }
}