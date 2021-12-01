import { getTeam, getMemberships, joinTeam, cancelMembership, approveMembership } from '../../api/data.js';
import { showModal } from '../../common/modal.js';
import { template } from './detailsView.js';

export function detailsPage(ctx) {
    ctx.render(template(detailsModel(ctx)));
}

async function detailsModel(ctx) {
    const userData = ctx.getSessionUser();
    const teamId = ctx.params.id;
    const teamPromise = getTeam(teamId);
    const membershipsPromise = getMemberships(teamId);

    const [team, memberships] = await Promise.all([teamPromise, membershipsPromise]);

    let userStatus = undefined;
    let userMemberships = undefined;
    if (userData != null) {
        userMemberships = memberships.find(m => m._ownerId == userData.id);
        // team._ownerId == userData.id ? team.userStatus = 'owner' : userMemberships.status;
        if (userMemberships == undefined) {
            userStatus = 'nonMember';
        } else {
            userStatus = userMemberships.status;
        }
    }
    const members = memberships
        .filter(m => m.status == 'member')
        .map(m => {
            return Object.assign(m, {
                action: {
                    remove: () => { },
                    isOwner: userStatus == 'owner'
                }
            });
        });
    const pending = memberships
        .filter(p => p.status == 'pending')
        .map(p => {
            return Object.assign(p, {
                action: {
                    approve: () => { console.log('approve'); },
                    decline: () => { console.log('decline'); }
                }
            });
        });

    Object.assign(team, {
        userStatus,
        userId: userData.id,
        members,
        pending
    });
    const action = { join, cancel, approve };
    console.log(team);
    return { team, action };

    async function join(e) {
        e.target.remove();
        await joinTeam(teamId);
        ctx.render(template(detailsModel(ctx)));
    }

    async function cancel(e) {
        const confirmed = await showModal('Are you sure?');
        if (confirmed) {
            e.target.remove();
            await cancelMembership(userMemberships._id);
            ctx.render(template(detailsModel(ctx)));
        }
    }
    async function approve(e, userMemberships) {
        const confirmed = await showModal('Are you sure?');
        if (confirmed) {
            e.target.remove();
            await approveMembership(userMemberships);
            ctx.render(template(detailsModel(ctx)));
        }
    }
}
