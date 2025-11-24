// app/menu-client/page.tsx
'use client';

import { useEffect, useState } from 'react';

interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    price: number;
    is_available: boolean;
    image_url: string | null;
    menu_categories: {
        id: number;
        name: string;
    } | null;
}

export default function MenuClientPage() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchMenu() {
            try {
                const response = await fetch('/api/menu');

                if (!response.ok) {
                    throw new Error('Error al cargar el menú');
                }

                const data = await response.json();
                setMenuItems(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally {
                setLoading(false);
            }
        }

        fetchMenu();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Cargando menú...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md">
                    <h2 className="font-bold mb-2">Error</h2>
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Reintentar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen p-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Menú de la Cevichería
                    </h1>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Recargar
                    </button>
                </div>

                {menuItems.length === 0 ? (
                    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                        No hay items en el menú todavía.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                {item.image_url && (
                                    <img
                                        src={item.image_url}
                                        alt={item.name}
                                        className="w-full h-48 object-cover"
                                    />
                                )}

                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {item.name}
                                        </h2>
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${item.is_available
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                            }`}>
                                            {item.is_available ? 'Disponible' : 'No disponible'}
                                        </span>
                                    </div>

                                    {item.menu_categories && (
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">
                                            {item.menu_categories.name}
                                        </span>
                                    )}

                                    {item.description && (
                                        <p className="text-gray-600 text-sm mb-3">
                                            {item.description}
                                        </p>
                                    )}

                                    <div className="text-2xl font-bold text-green-600">
                                        S/ {parseFloat(item.price.toString()).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}