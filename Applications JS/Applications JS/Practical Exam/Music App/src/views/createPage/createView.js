import { html } from '../../lib/lib.js';

export const template = (onSubmit, errors) => html`
    <!--Create Page-->
    <section class="createPage">
        <form @submit=${onSubmit}>
            <fieldset>
                <legend>Add Album</legend>
    
                <div class="container">
                    <label for="name" class="vhide">Album name</label>
                    <input id="name" name="name" class="name" type="text" placeholder="Album name"
                        class=${errors.type?.name ? 'error' : '' }>
    
                    <label for="imgUrl" class="vhide">Image Url</label>
                    <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url"
                        class=${errors.type?.imgUrl ? 'error' : '' }>
    
                    <label for="price" class="vhide">Price</label>
                    <input id="price" name="price" class="price" type="text" placeholder="Price"
                        class=${errors.type?.price ? 'error' : '' }>
    
                    <label for="releaseDate" class="vhide">Release date</label>
                    <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date"
                        class=${errors.type?.releaseDate ? 'error' : '' }>
    
                    <label for="artist" class="vhide">Artist</label>
                    <input id="artist" name="artist" class="artist" type="text" placeholder="Artist"
                        class=${errors.type?.artist ? 'error' : '' }>
    
                    <label for="genre" class="vhide">Genre</label>
                    <input id="genre" name="genre" class="genre" type="text" placeholder="Genre"
                        class=${errors.type?.genre ? 'error' : '' }>
    
                    <label for="description" class="vhide">Description</label>
                    <textarea name="description" class="description" placeholder="Description"
                        class=${errors.type?.description ? 'error' : '' }></textarea>
    
                    <button class="add-album" type="submit">Add New Album</button>
                </div>
            </fieldset>
        </form>
    </section>
`;