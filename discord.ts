import type { Plugin } from "$fresh/server.ts";

export function DiscordPlugin(
    { clientId, clientSecret }: { clientId: string; clientSecret: string },
): Plugin {
    return {
        name: "Discord",
        routes: [
            {
                path: "/api/token",
                handler: async (req) => {
                    const response = await fetch(
                        `https://discord.com/api/oauth2/token`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/x-www-form-urlencoded",
                            },
                            body: new URLSearchParams({
                                client_id: clientId,
                                client_secret: clientSecret,
                                grant_type: "authorization_code",
                                code: (await req.json()).code,
                            }),
                        },
                    );

                    const { access_token } = await response.json();
                    return new Response(JSON.stringify({ access_token }), {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                },
            },
        ],
    };
}
