import type { TRPCRouterRecord } from "@trpc/server";

import { protectedProcedure } from "@/trpc/init";

export const userRouter = {
  getAll: protectedProcedure.query(
    async ({ ctx }) => await ctx.db.user.findMany(),
  ),
} satisfies TRPCRouterRecord;
