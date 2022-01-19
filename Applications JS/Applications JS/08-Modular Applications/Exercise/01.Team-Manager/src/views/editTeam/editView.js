import { html, until } from '../../lib/lib.js';
import { spinner } from '../../common/spinnerTemplate.js';

export const template = (teamPromise) => html`
    <section id="edit">
        ${until(loadTeam(teamPromise), spinner())}
    </section>
`;

const teamCard = (team) => html`
    <article class="narrow">
        <header class="pad-med">
            <h1>Edit Team</h1>
        </header>
        <form @submit=${team.onSubmit} id="edit-form" class="main-form pad-large">
            <div class="error">${team.errors.message}</div>
            <label>Team name: <input type="text" name="name" .value=${team.name}></label>
            <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl}></label>
            <label>Description: <textarea name="description" .value=${team.description}></textarea></label>
            <input class="action cta" type="submit" value="Save Changes">
        </form>
    </article>
`;

async function loadTeam(teamPromise) {
    const team = await teamPromise;

    return teamCard(team);
}