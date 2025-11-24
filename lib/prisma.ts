import { PrismaClient } from './generated/prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

// @ts-expect-error - Generated client constructor signature mismatch
const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;
