function search() {
   const towns = document.getElementsByTagName('li');
   const searching = document.getElementById('searchText').value;
   let matches = 0;
   Array.from(towns).forEach(city => {
      if (city.textContent.includes(searching)) {
         city.style.fontWeight = 'bold';
         city.style.textDecoration = 'underline';
         matches++;
      } else {
         city.style.fontWeight = 'normal';
         city.style.textDecoration = '';
      }
   });
   return document.getElementById('result').textContent = `${matches} matches found`;
}
