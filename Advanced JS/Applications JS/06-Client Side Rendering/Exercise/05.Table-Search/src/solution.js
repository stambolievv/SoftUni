import { render } from './lib/lib.js';
import { readData } from './lib/request.js';
import { template } from './templates/template.js';

const container = document.querySelector('tbody');
const input = document.getElementById('searchField');
const searchBtn = document.getElementById('searchBtn');

let students = null;

searchBtn.addEventListener('click', onSearch);

function onSearch() {
   const searching = input.value.trim().toLocaleLowerCase();

   students.forEach(stu => {
      stu.match = searching && Object.values(stu.item).some(v => v.toLocaleLowerCase().includes(searching));
   });

   update();
}

function update() {
   render(students.map(template), container);
}

async function getData() {
   const data = await readData();

   students = Object.values(data).map(stu => Object.assign({ item: stu }, { match: false }));
}

getData();
