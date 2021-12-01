import { register } from '../api/data.js';
import { html, nothing } from '../lib/lib.js';
import { formDataInputs } from '../lib/util.js';

const template = (onSubmit, errors) => html`
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
                    <input class=${'form-control' + (errors.type.email ? ' is-invalid' : ' is-valid' )} id="email"
                        type="text" name="email" .value=${errors.data.email}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control' + (errors.type.password ? ' is-invalid' : ' is-valid' )} id="password"
                        type="password" name="password" .value=${errors.data.password}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="repass">Repeat</label>
                    <input class=${'form-control' + (errors.type.repass ? ' is-invalid' : ' is-valid' )} id="repass"
                        type="password" name="repass" .value=${errors.data.repass}>
                </div>
                ${(errors.message ? html`<div class="form-group" style="color:red;font-size:130%;">${errors.message}</div>`
                : nothing)}
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
`;

export function registerPage(ctx) {
    const update = (errors = {}) => ctx.render(template(onSubmit, errors));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataInputs(e.target, 'email', 'password', 'repass');

            await register(data);

            ctx.updateNavigation();
            ctx.page.redirect('/home');
        } catch (err) {
            const errors = {
                message: err.message || err.errorMsg.message,
                type: err.errorType || {},
                data: err.errorData || {}
            };
            update(errors);
        }
    }
}