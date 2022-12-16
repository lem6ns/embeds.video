import type { RequestHandler } from './$types';

export const GET = (async ({ params }) => {
    const binaryData = await fetch(`https://cdn.discordapp.com/${params.video}`).then(r=>r.blob());
    const { headers } = await fetch(`https://cdn.discordapp.com/${params.video}`, { method: "HEAD" });
    
    const resp = new Response(binaryData);
    resp.headers.append("Content-Type", headers.get("Content-Type") ?? "video/mp4")
    return resp;
}) satisfies RequestHandler;