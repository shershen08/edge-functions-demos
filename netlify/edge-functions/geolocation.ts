import type { Config, Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {


    const IMG = 'https://juicyllama.com/assets/images/logo-35x35-primary.png'

    if (request.method === "POST") {
        const kitten = await fetch(IMG);
        return kitten;
    }

    return Response.json({
        // geo: context.geo,
        time: Date.now(),
        // env: process.env.MY_IMPORTANT_VARIABLE
      });
    };

export const config: Config = {
    path: "/geolocation",
};
