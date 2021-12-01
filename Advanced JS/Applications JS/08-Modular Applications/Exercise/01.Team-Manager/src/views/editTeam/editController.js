import { getTeam, updateTeam } from '../../api/data.js';
import { formDataInputs } from '../../common/util.js';
import { template } from './editView.js';

export function editPage(ctx) {
    const teamId = ctx.params.id;

    const update = (errors = {}) => ctx.render(template(editModel(teamId, onSubmit, errors)));

    update();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const data = formDataInputs(e.target, 'name', 'logoUrl', 'description');

            await updateTeam(teamId, data);

            ctx.page.redirect(`/details/${teamId}`);
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

async function editModel(teamId, onSubmit, errors) {
    const team = await getTeam(teamId);
    team.onSubmit = onSubmit;
    team.errors = errors;

    return team;
}