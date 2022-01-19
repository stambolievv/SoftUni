import { html, until, nothing } from '../../lib/lib.js';
import { spinner } from '../../common/spinnerTemplate.js';

export const template = (myTeamsPromise) => html`
    <section id="my-teams">
        <article class="pad-med">
            <h1>My Teams</h1>
        </article>
        ${createTeamCard()}
        ${until(loadTeams(myTeamsPromise), spinner())}
    </section>
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

const createTeamCard = () => html`
    <article class="layout narrow">
        <div class="pad-med">
            <p>You are not a member of any team yet.</p>
            <p><a href="/teams">Browse all teams</a> to join one, or use the button bellow to cerate your own team.</p>
        </div>
        <div class=""><a href="/create-team" class="action cta">Create Team</a></div>
    </article>
`;

async function loadTeams(myTeamsPromise) {
    const teams = await myTeamsPromise;
    // if (teams.length == 0) {
    //     createTeamCard(true);
    // } else {
    //     createTeamCard(false);
    // }

    return teams.map(t => teamCard(t.team));
}