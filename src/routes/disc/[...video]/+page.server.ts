import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const attachments = !params.video.startsWith("attachments/") ? "attachments/" : ""

    return {
        url: `http://embeds.video/discprox/${attachments}${params.video}`
    }
}) satisfies PageServerLoad;