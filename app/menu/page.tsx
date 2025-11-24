// app/menu/page.tsx
import prisma from '@/lib/prisma';

export default async function MenuPage() {
    let menuItems = [];
    let error = null;

    try {
        menuItems = await prisma.menu_items.findMany({
            include: {
                menu_categories: true,
            },
            orderBy: {
                name: 'asc',
            },
        });
    } catch (e) {
        console.error('Error fetching menu items:', e);
        error = 'Error al cargar el menú. Verifica tu conexión a la base de datos.';
    }

    return (
        <main className="min-h-screen p-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">
                    Menú de la Cevichería
                </h1>

                {error ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                    </div>
                ) : menuItems.length === 0 ? (
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