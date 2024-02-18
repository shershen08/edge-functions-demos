import type { Config, Context } from "@netlify/edge-functions";


export default async (request: Request, context: Context) => {
    return Response.json({
        geo: context.geo,
        time: Date.now(),
        env: process.env.MY_IMPORTANT_VARIABLE
      });
    };

export const config: Config = {
    path: "/page-with-functions",
};
