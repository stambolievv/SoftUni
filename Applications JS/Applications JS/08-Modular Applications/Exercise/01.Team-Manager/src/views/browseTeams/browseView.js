import { html, until, nothing } from '../../lib/lib.js';
import { spinner } from '../../common/spinnerTemplate.js';

export const template = (teamsPromise, userData) => html`
    <section id="browse">
        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>
        ${userData ? createTemplate() : nothing}
        ${until(loadTeams(teamsPromise), spinner())}
    </section>
`;

const createTemplate = () => html`
    <article class="layout narrow">
        <div class="pad-small"><a href="/create-team" class="action cta">Create Team</a></div>
    </article>
`;

const teamCard = (team) => html`
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${team.members.length} Members</span>
            <div><a href="/details/${team._id}" class="action">See details</a></div>
        </div>
    </article>
`;

async function loadTeams(teamsPromise) {
    const teams = await teamsPromise;

    return teams.map(t => teamCard(t));
}