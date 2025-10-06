// Singleton for prisma:
// See https://www.prisma.io/docs/orm/prisma-client/testing/unit-testing#singleton

import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
