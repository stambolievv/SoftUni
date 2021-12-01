import { login } from '../api/data.js';
import { html, nothing } from '../lib/lib.js';
import { formDataInputs } from '../lib/util.js';

const template = (onSubmit, errorMessage = '', errorType = {}) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${'form-control' + (errorType.email || errorType.every ? ' is-invalid' : ' is-valid')}
                        id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control' + (errorType.password || errorType.every ? ' is-invalid' : ' is-valid')}
                        id="password" type="password" name="password">
                </div>
                ${(errorMessage ? html`<div class="form-group" style="color:red;font-size:130%;">
                    ${errorMessage}
                </div>` :
                nothing)}
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>
`;

export function loginPage(ctx) {
    const update = (errorMessage, errorType) => ctx.render(template(onSubmit, errorMessage, errorType));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataInputs(e.target);

            await login(data);

            ctx.updateNavigation();
            ctx.page.redirect('/home');
        } catch (err) {
            const message = err.message || err.errorMsg.message;
            const type = err.errorType || {};

            update(message, type);
        }
    }
}
