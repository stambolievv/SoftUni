import { html, until, nothing } from '../../lib/lib.js';
import { spinner } from '../../common/spinnerTemplate.js';

export const template = (teamPromise) => html`
    <section id="team-home">
        ${until(loadTeam(teamPromise), spinner())}
    </section>
`;

const teamCard = (team, actions) => html`
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${team.members.length} Members</span>
            <div>
                ${controlsTemplate(team, actions)}
            </div>
        </div>
        ${membersTemplate(team)}
        ${pendingTemplate(team)}
    </article>
`;

const controlsTemplate = (team, actions) => {
    if (team.userStatus == 'owner') { return html`<a href="/edit/${team._id}" class="action">Edit team</a>`; }
    if (team.userStatus == 'nonMember') { return html`<a @click=${actions.join} href="javascript:void(0)" class="action">Join team</a>`; }
    if (team.userStatus == 'member') { return html`<a @click=${actions.cancel} href="javascript:void(0)" class="action invert">Leave team</a>`; }
    if (team.userStatus == 'pending') { return html`Membership pending.<a @click=${actions.cancel} href="javascript:void(0)">Cancel request</a>`; }
};

const membersTemplate = (team) => html`
    <div class="pad-large">
        <h3>Members</h3>
        <ul class="tm-members">
            ${team.members.map(m => memberCard(m, m._ownerId == team.userId))}
        </ul>
    </div>
`;
const memberCard = (m, isSelf) => html`
    <li>${m.user.username}
        ${isSelf ? '(You)' : ''}
        ${(m.action.isOwner && !isSelf)
            ? html`<a @click=${m.action.decline} href="javascript:void(0)" class="tm-control action">Remove from team</a>`
            : nothing
        }
    </li>
`;

const pendingTemplate = (team) => html`
    ${team.userStatus == 'owner'
        ? html`
    <div class="pad-large">
        <h3>Membership Requests</h3>
        <ul class="tm-members">
            ${team.pending.map(p => pendingCard(p))}
        </ul>
    </div>`
        : nothing
        }
`;
const pendingCard = (p) => html`
    <li>
        ${p.user.username}
        <a @click=${p.action.approve} href="javascript:void(0)" class="tm-control action"> Approve</a>
        <a @click=${p.action.decline} href="javascript:void(0)" class="tm-control action"> Decline</a>
    </li>
`;

async function loadTeam(teamPromise) {
    const data = await teamPromise;
    return teamCard(data.team, data.action);
}
