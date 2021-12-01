import { createTeam } from '../../api/data.js';
import { formDataInputs } from '../../common/util.js';
import { template } from './createView.js';

export function createPage(ctx) {
    const update = (errors = {}) => ctx.render(template(onSubmit, errors));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataInputs(e.target, 'name', 'logoUrl', 'description');

            const result = await createTeam(data);
            ctx.page.redirect(`/details/${result.teamId}`);
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