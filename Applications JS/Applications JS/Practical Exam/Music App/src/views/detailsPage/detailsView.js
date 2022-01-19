import { html, until, nothing } from '../../lib/lib.js';
import { spinner } from '../../common/spinner.js';

export const template = (albumPromise) => html`
    <!--Details Page-->
    <section id="detailsPage">
        ${until(loadData(albumPromise), spinner())}
    </section>
`;

const albumCard = (album, actions) => html`
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo"></div>
        <div class="albumText">
            <h1>Name: ${album.name}</h1>
            <h3>Artist: ${album.artist}</h3>
            <h4>Genre: ${album.genre}</h4>
            <h4>Price: ${album.price}</h4>
            <h4>Date: ${album.releaseDate}</h4>
            <p>${album.description}</p>
        </div>
        ${actions.isOwner ? controlsTemplate(album._id, actions.onDelete) : nothing}
    </div>
    </div>
`;

const controlsTemplate = (albumId, onDelete) => html`
    <!-- Only for registered user and creator of the album-->
    <div class="actionBtn">
        <a href="/edit/${albumId}" class="edit">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
    </div>
`;

async function loadData(albumPromise) {
    const data = await albumPromise;
    return albumCard(data.album, data.actions);
}
