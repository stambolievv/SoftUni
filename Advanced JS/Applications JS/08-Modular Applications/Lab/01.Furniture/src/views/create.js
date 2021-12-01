import { createItem } from '../api/data.js';
import { html, nothing } from '../lib/lib.js';
import { formDataInputs } from '../lib/util.js';

const template = (onSubmit, errorMessage = '', errorType = {}) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class=${'form-control' + (errorType.make ? ' is-invalid' : ' is-valid' )}
                     id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class=${'form-control' + (errorType.model ? ' is-invalid' : ' is-valid' )}
                        id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class=${'form-control' + (errorType.year ? ' is-invalid' : ' is-valid' )}
                        id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class=${'form-control' + (errorType.description  ? ' is-invalid' : ' is-valid' )}
                        id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class=${'form-control' + (errorType.price  ? ' is-invalid' : ' is-valid' )}
                        id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class=${'form-control' + (errorType.img ? ' is-invalid' : ' is-valid' )}
                        id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class=${'form-control' + (errorType.material ? ' is-invalid' : ' is-valid' )}
                        id="new-material" type="text" name="material">
                </div>
                ${(errorMessage ? html`<div class="form-group" style="color:red;font-size:130%;">${errorMessage}</div>` : nothing)}
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>
`;

export function createPage(ctx) {
    const update = (errorMessage, errorType) => ctx.render(template(onSubmit, errorMessage, errorType));

    update();

    async function onSubmit(e) {
        e.preventDefault();
        
        try {
            const data = formDataInputs(e.target);
            const result = await createItem( data);

            ctx.page.redirect('/details/' + result._id);
        } catch (err) {
            const message = err.message || err.errorMsg.message;
            const type = err.errorType || {};

            update(message, type);
        }
    }

}