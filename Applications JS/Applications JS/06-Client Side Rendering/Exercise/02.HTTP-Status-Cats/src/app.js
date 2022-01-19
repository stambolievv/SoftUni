import { render } from './lib/lib.js';
import { catsTemplate } from './templates/template.js';
import { cats as catsData } from './data/catSeeder.js';

catsData.forEach(c => c.info = false);

const container = document.getElementById('allCats');

function update() {
    const value = catsTemplate(catsData, toggleInfo);
    render(value, container);
}

function toggleInfo(cat) {
    cat.info = !cat.info;
    update();
}

update();