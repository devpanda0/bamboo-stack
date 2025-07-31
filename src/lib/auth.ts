import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {reactStartCookies} from "better-auth/react-start";
import {db} from "./db";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql"
    }),
    socialProviders: {
        github: {
            clientId: Bun.env.GITHUB_CLIENT_ID,
            clientSecret: Bun.env.GITHUB_CLIENT_SECRET,
        },
        discord: {
            clientId: Bun.env.DISCORD_CLIENT_ID,
            clientSecret: Bun.env.DISCORD_CLIENT_SECRET,
        },
    },
    plugins: [
        reactStartCookies(),
    ],
});
