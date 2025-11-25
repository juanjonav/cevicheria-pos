import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// ===========================
// GET → Listar todos los items
// ===========================
export async function GET() {
    try {
        const menuItems = await prisma.menu_items.findMany({
            include: {
                category: true,
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
        if (!name || !price || !category_id) {
            return NextResponse.json(
                { error: 'Name, price and category_id are required' },
                { status: 400 }
            );
        }

        const newItem = await prisma.menu_items.create({
            data: {
                name,
                description: description ?? null,
                category_id: Number(category_id),
                price,
                image_url: image_url ?? null,
            },
            include: {
                category: true,
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