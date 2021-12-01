import { login } from '../../api/api.js';
import { formDataInputs } from '../../common/util.js';
import { template } from './loginView.js';

export function loginPage(ctx) {
    const update = (errors = {}) => ctx.render(template(onSubmit, errors));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataInputs(e.target, 'email', 'password');

            await login(data);

            ctx.updateNavigation();
            ctx.page.redirect('/my-teams');
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
