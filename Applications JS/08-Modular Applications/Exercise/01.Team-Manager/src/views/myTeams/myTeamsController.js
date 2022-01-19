import { getAllTeamsForMember, getAllMembers } from '../../api/data.js';
import { template } from './myTeamsView.js';

export function myTeamsPage(ctx) {
    ctx.render(template(myTeamsModel(ctx)));
}

async function myTeamsModel(ctx) {
    const userId = ctx.getSessionUser().id;
    const allTeamsForMemberPromise = getAllTeamsForMember(userId);
    const allMembersPromise = getAllMembers();

    const [allTeamsForMember, allMembers] = await Promise.all([allTeamsForMemberPromise, allMembersPromise]);
    allTeamsForMember.forEach(t => t.team.members = allMembers.filter(m => m.teamId == t.team._id));

    return allTeamsForMember;
}