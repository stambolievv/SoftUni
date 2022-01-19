import { html, nothing } from '../../lib/lib.js';

export const template = (albums, userData, onSubmit, query = '') => html`
    <!--Search Page-->
    <section id="searchPage">
        <h1>Search by Name</h1>
    
        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" .value=${query}>
            <button @click=${onSubmit} class="button-list">Search</button>
        </div>
    
        <h2>Results:</h2>
    
        <!--Show after click Search button-->
        <div class="search-result">
            ${albums.length != 0 ? albums.map(a => albumCard(a, userData)) : noAlbumsCard()}
        </div>
    </section>
`;
const albumCard = (album, userData) => html`
    <!--If have matches-->
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
            ${userData ? loggedUserCard(album) : nothing}
        </div>
    </div>
`;

const loggedUserCard = (album) => html`
    <div class="btn-group">
        <a href="/details/${album._id}" id="details">Details</a>
    </div>
`;

const noAlbumsCard = () => html`
    <!--If there are no matches-->
    <p class="no-result">No result.</p>
`;