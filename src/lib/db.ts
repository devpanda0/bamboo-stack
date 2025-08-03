import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@p/client.ts';

const createPrismaClient = () => {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();
export { $Enums } from "@p/client.ts";

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;