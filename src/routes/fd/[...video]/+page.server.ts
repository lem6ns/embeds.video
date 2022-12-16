import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const oneResp = (await fetch(`https://1.filedit.ch/1/${params.video}`, { method: "HEAD"})).ok;

    if (params.video.startsWith("1/") || oneResp) {
        return {
            url: `https://1.filedit.ch/1/${params.video.replace("1/", "")}`
        };
    };
    return {
        url: `https://bun.filedit.ch/${params.video}`
    }
}) satisfies PageServerLoad;