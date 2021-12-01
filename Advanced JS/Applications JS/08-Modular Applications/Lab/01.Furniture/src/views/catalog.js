import { paresQuerystring, getAll, getMyItems, getSessionUser } from '../api/data.js';
import { html, until, nothing } from '../lib/lib.js';

const template = (dataPromise, userData, onSearch, search) => html`
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
        <div class="col-md-12">
            <form @submit=${onSearch}>
                <input type="text" name="search" .value=${search}>
                <input class="btn btn-info" type="submit" value="Search">
            </form>
        </div>
    </div>
    <div class="row space-top">
        ${until(dataPromise, html`<div class="spinner"></div>`)}
    </div>
`;

const pagerTemplate = (page, pages, search) => html`
    ${page > 1 ? html`<a class="page-index btn btn-info" href=${createPageHref(page, -1, search)}>&lt; Prev</a>` : nothing}
    ${page < pages ? html`<a class="page-index btn btn-info" href=${createPageHref(page, 1, search)}>Next &gt;</a>` : nothing}
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

function createPageHref(page, step, search) {
 return `?page=${page + step}` + (search ? `&search=${search}` : '');   
}

export function catalogPage(ctx) {
    const query = paresQuerystring(ctx.querystring);
    const page = Number(query.page || 1);
    const search = query.search || '';

    const userPage = ctx.pathname == '/my-furniture'; 

    ctx.render(template(loadItems(userPage, page, search), userPage, onSearch, search));

    function onSearch(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const searchFor = formData.get('search').trim();
        
        if(searchFor){
            ctx.page.redirect(`/home?search=${searchFor}`);
        }else{
            ctx.page.redirect('/home');
        }
    }
}

async function loadItems(userPage, page, search) {
    if(userPage){
        const userId = getSessionUser().id;
        const items = await getMyItems(userId, page, search);
        return [
            pagerTemplate(page, items.pages),
            ...items.data.map(itemTemplate)
        ];
    }else{
        const items = await getAll(page, search);
        return [
            pagerTemplate(page, items.pages),
            ...items.data.map(itemTemplate)
        ];
    } 
}