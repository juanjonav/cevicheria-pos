import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// ===========================
// GET → Listar todos los items
// ===========================
export async function GET() {
    try {
        const menuItems = await prisma.menu_items.findMany({
            include: {
                menu_categories: true,
            },
            orderBy: {
                name: 'asc',
            },
        });

        return NextResponse.json(menuItems);
    } catch (error) {
        console.error('Error fetching menu items:', error);
        return NextResponse.json(
            { error: 'Failed to fetch menu items' },
            { status: 500 }
        );
    }
}

// ===========================
// POST → Crear un nuevo item
// ===========================
export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, description, category_id, price, image_url } = body;

        // Validación mínima
        if (!name || !price) {
            return NextResponse.json(
                { error: 'Name and price are required' },
                { status: 400 }
            );
        }

        const newItem = await prisma.menu_items.create({
            data: {
                name,
                description,
                category_id: category_id ? Number(category_id) : null,
                price,
                image_url: image_url ?? null,
            },
        });

        return NextResponse.json(newItem, { status: 201 });

    } catch (error) {
        console.error('Error creating menu item:', error);
        return NextResponse.json(
            { error: 'Failed to create menu item' },
            { status: 500 }
        );
    }
}
