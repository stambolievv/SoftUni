import { html, until, nothing } from '../../lib/lib.js';
import { spinner } from '../../common/spinner.js';

export const template = (albumsPromise) => html`
    <!--Catalog-->
    <section id="catalogPage">
        <h1>All Albums</h1>
        ${until(loadData(albumsPromise), spinner())}
    </section>
`;

const albumCard = (album) => html`
    <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: ${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            ${album.loggedUser ? loggedUserCard(album) : nothing}
        </div>
    </div>
`;

const loggedUserCard = (album) => html`
    <div class="btn-group">
        <a href="/details/${album._id}" id="details">Details</a>
    </div>
`;

const noAlbumsCard = () => html`
    <!--No albums in catalog-->
    <p>No Albums in Catalog!</p>
`;

async function loadData(albumsPromise) {
    const data = await albumsPromise;

    if (data.length == 0) { return noAlbumsCard(); }

    return data.map(albumCard);
}