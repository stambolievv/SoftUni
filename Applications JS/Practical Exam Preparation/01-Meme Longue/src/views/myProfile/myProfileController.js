import { getMyProfile } from '../../api/data.js';
import { template } from './myProfileView.js';

export function myProfilePage(ctx) {
    ctx.render(template(myProfileModel(ctx)));
}

async function myProfileModel(ctx) {
    const userData = ctx.getUserData();
    const meme = await getMyProfile(userData.id);

    return { meme, userData };
}