import { getAllMemes } from '../../api/data.js';
import { template } from './allMemesView.js';

export function allMemesPage(ctx) {
    ctx.render(template(memesModel()));
}

async function memesModel() {
    return await getAllMemes();
}