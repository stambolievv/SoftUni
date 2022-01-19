import { getAll, getMyItems, getSessionUser } from '../api/data.js';
import { html, until } from '../lib/lib.js';

const template = (dataPromise, userData) => html`
    <div class="row space-top">
        <div class="col-md-12">
            ${userData
                ? html`
                    <h1>My Furniture</h1>
                    <p>This is a list of your publications.</p>`
                : html`
                    <h1>Welcome to Furniture System</h1>
                    <p>Select furniture from the catalog to view details.</p>`
            }
        </div>
    </div>
    <div class="row space-top">
        ${until(dataPromise, html`<div class="spinner"></div>`)}
    </div>
`;

const itemTemplate = (item) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${item.img}" />
                <p>${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${item._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
`;

export function catalogPage(ctx) {
    const userPage = ctx.pathname == '/my-furniture'; 
    ctx.render(template(loadItems(userPage),userPage));
}

async function loadItems(userPage) {
    const items = [];
    
    if(userPage){
        const userId = getSessionUser().id;
        items.push(await getMyItems(userId));
    }else{
        items.push(await getAll());
    }

    return items[0].map(itemTemplate);
}