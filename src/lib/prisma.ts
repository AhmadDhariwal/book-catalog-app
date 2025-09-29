import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
declare global {
  // allow global prisma on dev to avoid too many clients
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
