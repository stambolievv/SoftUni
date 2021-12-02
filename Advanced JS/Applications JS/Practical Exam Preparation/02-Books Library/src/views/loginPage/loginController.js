import { login } from '../../api/api.js';
import { showNotify } from '../../common/notify.js';
import { formDataHandler } from '../../common/formData.js';
import { template } from './loginView.js';

export function loginPage(ctx) {
    const update = (errors = {}) => ctx.render(template(onSubmit, errors));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataHandler(e.target, 'email', 'password');

            await login(data);

            ctx.updateNavigation();
            ctx.page.redirect('/all-memes');
        } catch (err) {
            const errors = {
                message: err.message || err.errorMsg.message,
                type: err.errorType || {},
                data: err.errorData || {}
            };
            showNotify(errors.message, 'errorBox');
            update(errors);
        }
    }
}
