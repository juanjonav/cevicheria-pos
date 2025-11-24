// lib/prisma.ts
import { PrismaClient } from '../app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// Crear pool de conexiones PostgreSQL
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

// Crear adapter de PostgreSQL
const adapter = new PrismaPg(pool);

// Crear cliente Prisma con el adapter
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    adapter,
    log: ['query', 'error', 'warn'],
});

// En desarrollo, guardar la instancia globalmente para evitar 
// múltiples conexiones durante Hot Module Replacement
if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

export default prisma;