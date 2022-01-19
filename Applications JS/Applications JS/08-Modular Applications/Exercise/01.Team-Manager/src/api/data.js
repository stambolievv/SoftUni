import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

// user authentication
const userKey = 'currentUserData';
const getSessionUser = () => JSON.parse(sessionStorage.getItem(userKey));
const setSessionUser = (data) => sessionStorage.setItem(userKey, data);
const removeSessionUser = () => sessionStorage.removeItem(userKey);

// DB requests
const endpoints = {
    allTeams: '/data/teams',
    teamById: (teamId) => `/data/teams/${teamId}`,
    createTeam: '/data/teams',
    updateTeam: (teamId) => `/data/teams/${teamId}`,
    joinRequest: '/data/members',
    allMembershipsInTeam: (teamId) => `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`,
    allMembers: '/data/members?where=status%3D%22member%22',
    allTeamsForMember: (userId) => `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`,
    cancelRequest: (membershipId) => `/data/members/${membershipId}`,
    approveRequest: (membershipId) => `/data/members/${membershipId}`,
};

// team collection
async function getAllTeams() {
    return await api.get(endpoints.allTeams);
};
async function getTeam(teamId) {
    return await api.get(endpoints.teamById(teamId));
};
async function createTeam(teamData) {
    const result = await api.post(endpoints.createTeam, teamData);
    const request = await joinTeam(result._id);
    return await approveMembership(request, 'owner');
};
async function updateTeam(teamId, teamData) {
    return await api.put(endpoints.updateTeam(teamId), teamData);
};
async function joinTeam(teamId) {
    const body = { teamId };
    return await api.post(endpoints.joinRequest, body);
};

// members collection

async function getMemberships(teamId) {
    return await api.get(endpoints.allMembershipsInTeam(teamId));
};
async function getAllMembers() {
    return await api.get(endpoints.allMembers);
};
async function getAllTeamsForMember(userId) {
    return await api.get(endpoints.allTeamsForMember(userId));
};
async function cancelMembership(membershipId) {
    return await api.del(endpoints.cancelRequest(membershipId));
};
async function approveMembership(membership, status = 'member') {
    const body = {
        teamId: membership.teamId,
        status: status
    };
    return await api.put(endpoints.approveRequest(membership._id), body);
}

export {
    login,
    register,
    logout,
    getSessionUser,
    setSessionUser,
    removeSessionUser,
    getAllTeams,
    getTeam,
    createTeam,
    updateTeam,
    joinTeam,
    getMemberships,
    getAllMembers,
    getAllTeamsForMember,
    cancelMembership,
    approveMembership
};