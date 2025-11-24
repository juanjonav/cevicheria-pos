import prisma from '../lib/prisma';

async function main() {
    try {
        console.log('Connecting to database...');
        // Try to connect or run a simple query
        // Since we don't have models yet, we can just check if the client initializes
        // But to really test connection we need a query.
        // We can try to query a non-existent table or just connect.
        await prisma.$connect();
        console.log('Successfully connected to database with Accelerate!');
    } catch (e) {
        console.error('Error connecting to database:', e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
