import {ORPCRouter, publicProcedure} from "@/orpc/init.ts";

const router = ORPCRouter({
    test: publicProcedure.handler(() => {
        return 'Hello, ORPC!';
    })
})

export default router;