import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const litterboxResp = (await fetch(`https://litter.catbox.moe/${params.video}`, { method: "HEAD"})).ok;

    if (litterboxResp) {
        return {
            url: `https://litter.catbox.moe/${params.video}`
        };
    };
    return {
        url: `https://files.catbox.moe/${params.video}`
    }
}) satisfies PageServerLoad;