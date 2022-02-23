import { register } from '../../api/api.js';
import { showNotify } from '../../util/notify.js';
import { formDataHandler } from '../../util/formData.js';
import { template } from './registerView.js';

export function registerPage(ctx) {
    const update = (errors = {}) => ctx.render(template(onSubmit, errors));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataHandler(e.target, 'email', 'username', 'gender', 'password', 'repeatPass');

            await register(data);

            ctx.updateNavigation();
            ctx.page.redirect('/all-memes');
        } catch (err) {
            const errors = {
                message: err.message || err.errorMsg.message,
                type: err.errorType || {},
                data: err.errorData || {}
            };
            showNotify(errors.message, 'errorBox');
            console.log(errors);
            update(errors);
        }
    }
}