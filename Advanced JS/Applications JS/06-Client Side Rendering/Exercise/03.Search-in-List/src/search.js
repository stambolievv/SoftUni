import { render } from './lib/lib.js';
import { towns as townsData } from './data/towns.js';
import { template } from './templates/template.js';

const container = document.getElementById('towns');
const input = document.getElementById('searchText');
const output = document.getElementById('result');
document.getElementById('button').addEventListener('click', onSearch);

const towns = townsData.map(town => ({ name: town, match: false }));

function onSearch() {
   const searching = input.value.trim().toLocaleLowerCase();

   towns.forEach(town => {
      town.match = searching && town.name.toLocaleLowerCase().includes(searching);
   });

   output.textContent = `${towns.filter(town => town.match).length} matches found`;

   update();
}

function update() {
   const value = template(towns);
   render(value, container);
}

update();