import { getById, updateItem } from '../api/data.js';
import { html, until, nothing } from '../lib/lib.js';
import { formDataInputs } from '../lib/util.js';

const template = (dataPromise) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
        ${until(dataPromise, html`<div class="spinner"></div>`)}
    </div>
`;

const formTemplate = (item, onSubmit, errorMessage = '', errorType = {}) => html`
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class=${'form-control' + (errorType.make ? ' is-invalid' : ' is-valid' )} id="new-make"
                        type="text" name="make" .value=${item.make}>
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class=${'form-control' + (errorType.model ? ' is-invalid' : ' is-valid' )} id="new-model"
                        type="text" name="model" .value=${item.model}>
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class=${'form-control' + (errorType.year ? ' is-invalid' : ' is-valid' )} id="new-year"
                        type="number" name="year" .value=${item.year}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class=${'form-control' + (errorType.description ? ' is-invalid' : ' is-valid' )}
                        id="new-description" type="text" name="description" .value=${item.description}>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class=${'form-control' + (errorType.price ? ' is-invalid' : ' is-valid' )} id="new-price"
                        type="number" name="price" .value=${item.price}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class=${'form-control' + (errorType.img ? ' is-invalid' : ' is-valid' )} id="new-image"
                        type="text" name="img" .value=${item.img}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class=${'form-control' + (errorType.material ? ' is-invalid' : ' is-valid' )} id="new-material"
                        type="text" name="material" .value=${item.material}>
                </div>
                ${(errorMessage ? html`<div class="form-group" style="color:red;font-size:130%;">${errorMessage}</div>` :
                   nothing)}
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>
`;

export function editPage(ctx) {
    const itemPromise = getById(ctx.params.id);

    const update = (itemPromise, errorMessage, errorType) => ctx.render(template(loadItem(itemPromise, errorMessage, errorType)));

    update(itemPromise);

    async function loadItem(itemPromise, errorMessage, errorType) {
        const item = await itemPromise;
        return formTemplate(item, onSubmit, errorMessage, errorType);
    }

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataInputs(e.target);
            const result = await updateItem(ctx.params.id, data);

            ctx.page.redirect('/details/' + result._id);
        } catch (err) {
            const data = err.errorData || {};
            const message = err.message || err.errorMsg.message;
            const type = err.errorType || {};
            
            update(data, message, type);
        }
    }
}

