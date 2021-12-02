import { getAllBooks } from '../../api/data.js';
import { template } from './homeView.js';

export function homePage(ctx) {
    ctx.render(template(homeModel()));

}

async function homeModel() {
    return await getAllBooks();
}