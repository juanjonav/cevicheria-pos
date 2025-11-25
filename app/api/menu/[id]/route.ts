import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/items/:id
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        const menuItem = await prisma.menu_items.findUnique({
            where: { id: Number(id) },
            include: {
                category: true,
            },
        });

        if (!menuItem) {
            return NextResponse.json(
                { error: 'Menu item not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(menuItem);
    } catch (error) {
        console.error('Error fetching menu item by ID:', error);
        return NextResponse.json(
            { error: 'Failed to fetch menu item' },
            { status: 500 }
        );
    }
}
