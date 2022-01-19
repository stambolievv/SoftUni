import { register } from '../api/data.js';
import { html, nothing } from '../lib/lib.js';
import { formDataInputs } from '../lib/util.js';

const template = (onSubmit, errorMessage = '', errorType = {}) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${'form-control' + (errorType.email ? ' is-invalid' : ' is-valid' )} id="email" type="text"
                        name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control' + (errorType.password ? ' is-invalid' : ' is-valid' )} id="password"
                        type="password" name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class=${'form-control' + (errorType.rePass ? ' is-invalid' : ' is-valid' )} id="rePass"
                        type="password" name="rePass">
                </div>
                ${(errorMessage ? html`<div class="form-group" style="color:red;font-size:130%;">${errorMessage}</div>` :
        nothing)}
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
`;

export function registerPage(ctx) {
    const update = (errorMessage, errorType) => ctx.render(template(onSubmit, errorMessage, errorType));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataInputs(e.target);

            await register(data);

            ctx.updateNavigation();
            ctx.page.redirect('/home');
        } catch (err) {
            const message = err.message || err.errorMsg.message;
            const type = err.errorType || {};

            update(message, type);
        }
    }
}