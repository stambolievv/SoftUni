import { deleteItem, getById, getSessionUser } from '../api/data.js';
import { html, until, nothing } from '../lib/lib.js';

const template = (dataPromise) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        ${until(dataPromise, html`<div class="spinner"></div>`)}
    </div>
`;

const itemTemplate = (item, isOwner,onDelete) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${item.img} />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${item.make}</span></p>
        <p>Model: <span>${item.model}</span></p>
        <p>Year: <span>${item.year}</span></p>
        <p>Description: <span>${item.description}</span></p>
        <p>Price: <span>${item.price}</span></p>
        <p>Material: <span>${item.material}</span></p>
        ${isOwner ? html`<div>
            <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
        </div>`: nothing
         }
    
    </div>
`;

export function detailsPage(ctx) {
    ctx.render(template(loadItems(ctx)));
}

async function loadItems(ctx) {
    const item = await getById(ctx.params.id);

    const userId = getSessionUser() ? getSessionUser().id : null;
    const isOwner = userId == item._ownerId;

    return itemTemplate(item, isOwner, onDelete);

   async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this movie?');
        if(confirmed){
            await deleteItem(ctx.params.id);
            ctx.page.redirect('/home');
        }
    }
}
