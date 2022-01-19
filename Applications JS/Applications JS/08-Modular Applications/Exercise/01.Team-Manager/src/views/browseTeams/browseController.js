import { getAllMembers, getAllTeams } from '../../api/data.js';
import { template } from './browseView.js';

export function browseTeamsPage(ctx) {
    const userData = ctx.getSessionUser();
    ctx.render(template(browseModel(), userData));
}

async function browseModel() {
    const allTeamPromise = getAllTeams();
    const allMembersPromise = getAllMembers();
    const [allTeams, allMembers] = await Promise.all([allTeamPromise, allMembersPromise]);

    allTeams.forEach(t => t.members = allMembers.filter(m => m.teamId == t._id));

    return allTeams;
}