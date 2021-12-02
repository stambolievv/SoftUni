import { register } from '../../api/api.js';
import { formDataHandler } from '../../common/formData.js';
import { template } from './registerView.js';

export function registerPage(ctx) {
    const update = (errors = {}) => ctx.render(template(onSubmit, errors));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataHandler(e.target, 'email', 'password', 'confirm-pass');

            await register(data);

            ctx.updateNavigation();
            ctx.page.redirect('/home');
        } catch (err) {
            const errors = {
                message: err.message || err.errorMsg.message,
                type: err.errorType || {},
                data: err.errorData || {}
            };
            ctx.showNotify(errors.message, 'errorBox');
            console.log(errors);
            update(errors);
        }
    }
}