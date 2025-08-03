import {ORPCError, os} from "@orpc/server";
import type {db} from "@/lib/db.ts";
import {getSession} from "@/lib/auth-client.ts";

const base = os.$context<{
    db: typeof db,
    headers: HeadersInit,
}>()

export const ORPCRouter = base.router.bind(base);

const timingMiddleware = base.middleware(async ({ next, path }) => {
    const start = performance.now();

    if (process.env.NODE_ENV === 'development') {
        const waitMs = Math.floor(Math.random() * 400) + 100;
        await new Promise((resolve) => setTimeout(resolve, waitMs));
    }

    const result = await next();

    const end = performance.now();
    console.log(`[ORPC] ${path} took ${(end - start).toFixed(2)}ms to execute`);

    return result;
});

const sessionMiddleware = base.middleware(async ({ context, next }) => {
    const { data: session } = await getSession({
        fetchOptions: { headers: context.headers }
    })

    if (!session) {
        throw new ORPCError('UNAUTHORIZED');
    }

    return next({
        context: {
            session: {
                user: {
                    id: session.user.id,
                    name: session.user.name,
                    img: session.user.image || '',
                }
            },
        },
    });
});

export const publicProcedure = base.use(timingMiddleware);
export const protectedProcedure = base
    .use(timingMiddleware)
    .use(sessionMiddleware);