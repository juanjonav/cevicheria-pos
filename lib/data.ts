export interface Product {
  id: string
  name: string
  price: number
  category: "Clásicos" | "Calientes" | "Bebidas" | "Guarniciones"
  image: string
  description: string
}

export const products: Product[] = [
  // Clásicos
  {
    id: "1",
    name: "Ceviche Clásico",
    price: 35.0,
    category: "Clásicos",
    image: "/ceviche-clasico-peruvian-food.jpg",
    description: "Pesca del día, limón, cebolla, ají limo, camote y choclo.",
  },
  {
    id: "2",
    name: "Ceviche Mixto",
    price: 40.0,
    category: "Clásicos",
    image: "/ceviche-mixto-seafood.jpg",
    description: "Pescado y mariscos selectos en leche de tigre.",
  },
  {
    id: "3",
    name: "Leche de Tigre",
    price: 18.0,
    category: "Clásicos",
    image: "/leche-de-tigre-glass.jpg",
    description: "Concentrado de ceviche con chicharrón de pota.",
  },
  {
    id: "4",
    name: "Tiradito al Ají Amarillo",
    price: 38.0,
    category: "Clásicos",
    image: "/tiradito-aji-amarillo.jpg",
    description: "Láminas de pescado en crema de ají amarillo.",
  },

  // Calientes
  {
    id: "5",
    name: "Jalea Real",
    price: 45.0,
    category: "Calientes",
    image: "/jalea-real-peruvian-fried-seafood.jpg",
    description: "Chicharrón de pescado y mariscos con yucas fritas.",
  },
  {
    id: "6",
    name: "Arroz con Mariscos",
    price: 42.0,
    category: "Calientes",
    image: "/arroz-con-mariscos-peru.jpg",
    description: "Arroz arbóreo con mixtura de mariscos y salsa madre.",
  },
  {
    id: "7",
    name: "Chicharrón de Pescado",
    price: 32.0,
    category: "Calientes",
    image: "/chicharron-de-pescado.jpg",
    description: "Trozos de pescado fritos con salsa criolla.",
  },

  // Bebidas
  {
    id: "8",
    name: "Chicha Morada (Jarra)",
    price: 15.0,
    category: "Bebidas",
    image: "/chicha-morada-pitcher.jpg",
    description: "Maíz morado, piña, canela y clavo.",
  },
  {
    id: "9",
    name: "Limonada Frozen",
    price: 12.0,
    category: "Bebidas",
    image: "/frozen-lemonade.jpg",
    description: "Limón fresco y hielo granizado.",
  },
  {
    id: "10",
    name: "Inca Kola 1.5L",
    price: 10.0,
    category: "Bebidas",
    image: "/inca-kola-bottle.jpg",
    description: "La bebida del sabor nacional.",
  },
  {
    id: "11",
    name: "Cerveza Cusqueña",
    price: 12.0,
    category: "Bebidas",
    image: "/cusquena-beer.jpg",
    description: "Trigo o Dorada, bien helada.",
  },

  // Guarniciones
  {
    id: "12",
    name: "Porción de Arroz",
    price: 5.0,
    category: "Guarniciones",
    image: "/white-rice-bowl.jpg",
    description: "Arroz blanco graneado.",
  },
  {
    id: "13",
    name: "Yucas Fritas",
    price: 8.0,
    category: "Guarniciones",
    image: "/fried-yuca.jpg",
    description: "Bastones de yuca amarilla frita.",
  },
]

export interface Sale {
  id: string
  date: string
  total: number
  items: number
  status: "Completado" | "Cancelado" | "En Proceso"
  paymentMethod: "Efectivo" | "Tarjeta" | "Yape/Plin"
}

export const recentSales: Sale[] = [
  { id: "ORD-001", date: "2023-11-23 12:30", total: 85.0, items: 3, status: "Completado", paymentMethod: "Tarjeta" },
  { id: "ORD-002", date: "2023-11-23 12:45", total: 45.0, items: 1, status: "Completado", paymentMethod: "Yape/Plin" },
  { id: "ORD-003", date: "2023-11-23 13:00", total: 120.5, items: 4, status: "Completado", paymentMethod: "Efectivo" },
  { id: "ORD-004", date: "2023-11-23 13:15", total: 35.0, items: 1, status: "En Proceso", paymentMethod: "Tarjeta" },
  { id: "ORD-005", date: "2023-11-23 11:20", total: 200.0, items: 6, status: "Completado", paymentMethod: "Tarjeta" },
]

export interface Expense {
  id: string
  date: string
  description: string
  amount: number
  category: "Insumos" | "Personal" | "Servicios" | "Mantenimiento"
  status: "Pagado" | "Pendiente"
}

export const expenses: Expense[] = [
  {
    id: "EXP-001",
    date: "2023-11-23 08:00",
    description: "Compra de Pescado Fresco (Terminal)",
    amount: 450.0,
    category: "Insumos",
    status: "Pagado",
  },
  {
    id: "EXP-002",
    date: "2023-11-23 08:30",
    description: "Verduras y Limones (Mayorista)",
    amount: 120.5,
    category: "Insumos",
    status: "Pagado",
  },
  {
    id: "EXP-003",
    date: "2023-11-20 18:00",
    description: "Pago Semanal Ayudante Cocina",
    amount: 350.0,
    category: "Personal",
    status: "Pagado",
  },
  {
    id: "EXP-004",
    date: "2023-11-22 10:00",
    description: "Recibo de Luz del Mes",
    amount: 280.5,
    category: "Servicios",
    status: "Pendiente",
  },
  {
    id: "EXP-005",
    date: "2023-11-21 15:30",
    description: "Gas Propano (2 Balones)",
    amount: 110.0,
    category: "Insumos",
    status: "Pagado",
  },
]
