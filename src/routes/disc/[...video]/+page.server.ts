import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const attachments = !params.video.startsWith("attachments/") ? "attachments/" : ""

    return {
        url: `https://cdn.discordapp.com/${attachments}${params.video}`
    }
}) satisfies PageServerLoad;