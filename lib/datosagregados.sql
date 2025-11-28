-- ============================================
-- 1. USUARIOS Y CATÁLOGOS BÁSICOS
-- ============================================

-- Usuarios del sistema
INSERT INTO users (username, password_hash, full_name, email, role, is_active, created_at, updated_at) VALUES
('admin', '$2a$10$YourHashHere', 'José Martínez', 'jose@cevicheria.com', 'admin', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('cajero1', '$2a$10$YourHashHere', 'María González', 'maria@cevicheria.com', 'cashier', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('cocinero1', '$2a$10$YourHashHere', 'Carlos Ramírez', 'carlos@cevicheria.com', 'kitchen', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('mesero1', '$2a$10$YourHashHere', 'Ana Torres', 'ana@cevicheria.com', 'waiter', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Categorías de menú
INSERT INTO menu_categories (name, description, sort_order, is_active, created_at, updated_at) VALUES
('Ceviches', 'Ceviches frescos preparados al momento', 1, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Chicharrones', 'Chicharrones y frituras crujientes', 2, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Causas y Tiraditos', 'Entradas frías peruanas', 3, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Arroces', 'Arroces marineros y con mariscos', 4, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Sudados y Parihuela', 'Sopas y caldos marinos', 5, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Bebidas Frías', 'Gaseosas, jugos y chicha', 6, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Bebidas Calientes', 'Café, té e infusiones', 7, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Complementos', 'Guarniciones y extras', 8, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Proveedores
INSERT INTO suppliers (name, contact_name, phone, email, ruc, address, is_active, created_at, updated_at) VALUES
('Pescados Frescos del Mar', 'Roberto Flores', '987654321', 'ventas@pescadosmar.com', '20123456789', 'Terminal Pesquero, Huánuco', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Distribuidora La Canasta', 'Carmen Vega', '987654322', 'pedidos@lacanasta.com', '20123456790', 'Mercado Central, Huánuco', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Bebidas y Más SAC', 'Luis Paredes', '987654323', 'ventas@bebidasmas.com', '20123456791', 'Av. Alameda #234, Huánuco', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Abarrotes Don José', 'José Méndez', '987654324', 'donjose@gmail.com', '20123456792', 'Jr. Huallayco #156, Huánuco', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Gas y Combustibles', 'Miguel Santos', '987654325', 'gashuanuco@outlook.com', '20123456793', 'Carretera Central Km 2, Huánuco', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Clientes frecuentes
INSERT INTO clients (name, phone, email, document_type, document_number, address, created_at, updated_at) VALUES
('Cliente Mostrador', NULL, NULL, NULL, NULL, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Empresa Constructora Los Andes SAC', '962111222', 'facturacion@losandes.com', 'RUC', '20456789012', 'Av. Alameda #890, Huánuco', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Municipalidad Provincial de Huánuco', '962111223', 'logistica@munihco.gob.pe', 'RUC', '20456789013', 'Plaza de Armas s/n, Huánuco', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Juan Pérez López', '962111224', 'jperez@gmail.com', 'DNI', '45678901', 'Jr. Dos de Mayo #345, Huánuco', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('María Sánchez Rojas', '962111225', 'msanchez@hotmail.com', 'DNI', '45678902', 'Av. Universitaria #567, Huánuco', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ============================================
-- 2. ITEMS DEL MENÚ CON PRECIOS Y COSTOS
-- ============================================

-- Ceviches (category_id = 1)
INSERT INTO menu_items (name, description, category_id, price, cost, preparation_time, is_available, created_at, updated_at) VALUES
('Ceviche Clásico', 'Pescado fresco en cubos, limón, cebolla, ají limo, choclo y camote', 1, 25.00, 12.00, 15, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ceviche Mixto', 'Pescado, pulpo, calamar y langostinos al limón', 1, 35.00, 18.00, 20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ceviche de Conchas Negras', 'Conchas negras frescas con limón y ají limo', 1, 45.00, 25.00, 15, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ceviche Marino', 'Mix de mariscos frescos del día', 1, 40.00, 22.00, 18, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ceviche de Pulpo', 'Pulpo tierno marinado en limón', 1, 38.00, 20.00, 20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Chicharrones (category_id = 2)
('Chicharrón de Pescado', 'Trozos de pescado frito crujiente con yuca y salsa criolla', 2, 28.00, 14.00, 25, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Chicharrón de Calamar', 'Anillos de calamar empanizados', 2, 32.00, 16.00, 20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Chicharrón Mixto', 'Pescado, calamar y langostinos fritos', 2, 38.00, 20.00, 30, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Jalea Mixta Personal', 'Fritura mixta de mariscos con yuca', 2, 35.00, 18.00, 25, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Jalea Mixta Familiar', 'Jalea para 3-4 personas', 2, 85.00, 45.00, 35, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Causas y Tiraditos (category_id = 3)
('Causa Rellena de Atún', 'Causa de papa amarilla rellena con atún', 3, 18.00, 8.00, 15, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Causa de Langostinos', 'Causa rellena con langostinos al limón', 3, 25.00, 13.00, 20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Tiradito Clásico', 'Láminas de pescado con crema de ají amarillo', 3, 28.00, 14.00, 15, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Tiradito de Conchas', 'Tiradito de conchas frescas', 3, 35.00, 18.00, 15, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Leche de Tigre', 'Jugo de ceviche con trozos de pescado', 3, 15.00, 7.00, 10, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Arroces (category_id = 4)
('Arroz con Mariscos', 'Arroz marinero con mix de mariscos', 4, 32.00, 16.00, 30, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Arroz Chaufa de Mariscos', 'Arroz frito al estilo chino con mariscos', 4, 30.00, 15.00, 25, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Tacu Tacu con Mariscos', 'Tacu tacu con salsa de mariscos', 4, 35.00, 18.00, 30, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Sudados y Parihuela (category_id = 5)
('Sudado de Pescado', 'Pescado cocido con tomate, cebolla y cerveza', 5, 28.00, 14.00, 25, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Sudado de Mariscos', 'Mix de mariscos sudados', 5, 35.00, 18.00, 30, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Parihuela Personal', 'Sopa de mariscos concentrada', 5, 30.00, 15.00, 35, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Parihuela Familiar', 'Parihuela para 3-4 personas', 5, 75.00, 38.00, 40, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Chilcano de Pescado', 'Caldo de pescado reconstituyente', 5, 18.00, 9.00, 20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Bebidas Frías (category_id = 6)
('Inca Kola 1.5L', 'Gaseosa de 1.5 litros', 6, 8.00, 4.50, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Coca Cola 1.5L', 'Gaseosa de 1.5 litros', 6, 8.00, 4.50, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Inca Kola Personal', 'Gaseosa de 500ml', 6, 4.00, 2.20, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Coca Cola Personal', 'Gaseosa de 500ml', 6, 4.00, 2.20, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Chicha Morada 1L', 'Chicha morada natural', 6, 10.00, 3.50, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Limonada Frozen', 'Limonada frozen con hierbabuena', 6, 8.00, 2.80, 5, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Maracuyá Especial', 'Jugo de maracuyá natural', 6, 9.00, 3.20, 5, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cerveza Cristal', 'Cerveza nacional 650ml', 6, 10.00, 5.50, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cerveza Pilsen', 'Cerveza nacional 650ml', 6, 10.00, 5.50, 0, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Bebidas Calientes (category_id = 7)
('Café Pasado', 'Café peruano tradicional', 7, 4.00, 1.20, 5, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Té Caliente', 'Té de hierbas', 7, 3.00, 0.80, 5, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Complementos (category_id = 8)
('Porción de Arroz Blanco', 'Arroz blanco adicional', 8, 4.00, 1.50, 10, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Yucas Fritas', 'Yucas doradas', 8, 5.00, 2.00, 15, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Choclo con Queso', 'Choclo peruano con queso fresco', 8, 8.00, 3.50, 10, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cancha Serrana', 'Maíz tostado', 8, 3.00, 1.00, 5, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ============================================
-- 3. INVENTARIO Y STOCK DE INSUMOS
-- ============================================

-- Items de inventario
INSERT INTO stock_items (name, unit, quantity, min_alert_level, unit_cost, is_active, created_at, updated_at) VALUES
-- Pescados y Mariscos
('Pescado Fresco (Corvina)', 'kg', 25.000, 10.000, 18.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Langostinos', 'kg', 8.000, 5.000, 35.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Pulpo', 'kg', 6.000, 3.000, 28.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Calamar', 'kg', 10.000, 5.000, 22.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Conchas Negras', 'kg', 4.000, 2.000, 45.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Mix de Mariscos', 'kg', 12.000, 6.000, 25.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Vegetales y Hierbas
('Limón', 'kg', 30.000, 15.000, 3.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cebolla Roja', 'kg', 20.000, 10.000, 2.80, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ají Limo', 'kg', 3.000, 1.500, 12.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cilantro', 'atado', 15.000, 8.000, 1.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ajo', 'kg', 5.000, 2.000, 8.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Tomate', 'kg', 15.000, 8.000, 3.20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Rocoto', 'kg', 4.000, 2.000, 6.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Tubérculos
('Papa Amarilla', 'kg', 25.000, 12.000, 3.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Camote', 'kg', 20.000, 10.000, 2.80, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Yuca', 'kg', 18.000, 10.000, 2.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Choclo', 'unidad', 30.000, 15.000, 1.80, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Granos y Cereales
('Arroz Extra', 'kg', 50.000, 25.000, 3.80, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cancha Serrana', 'kg', 10.000, 5.000, 4.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Condimentos y Salsas
('Sal', 'kg', 15.000, 5.000, 1.20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Pimienta', 'kg', 3.000, 1.000, 15.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Comino', 'kg', 2.000, 0.500, 18.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ají Amarillo Molido', 'kg', 5.000, 2.000, 12.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Aceite Vegetal', 'litro', 20.000, 10.000, 8.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Vinagre', 'litro', 8.000, 4.000, 4.20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Salsa de Soya', 'litro', 6.000, 3.000, 12.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Lácteos
('Leche Evaporada', 'lata', 24.000, 12.000, 4.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Queso Fresco', 'kg', 8.000, 4.000, 15.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Bebidas
('Inca Kola 1.5L', 'unidad', 36.000, 20.000, 4.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Coca Cola 1.5L', 'unidad', 36.000, 20.000, 4.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Inca Kola 500ml', 'unidad', 48.000, 24.000, 2.20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Coca Cola 500ml', 'unidad', 48.000, 24.000, 2.20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cerveza Cristal', 'unidad', 48.000, 24.000, 5.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cerveza Pilsen', 'unidad', 48.000, 24.000, 5.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Jugos y Frutas
('Maracuyá', 'kg', 10.000, 5.000, 8.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Maíz Morado', 'kg', 8.000, 4.000, 4.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Piña', 'unidad', 12.000, 6.000, 3.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Azúcar', 'kg', 25.000, 10.000, 3.20, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Café y Té
('Café Molido', 'kg', 5.000, 2.000, 22.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Té Filtrante', 'caja', 6.000, 3.000, 8.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Otros Insumos
('Servilletas', 'paquete', 15.000, 8.000, 12.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Bolsas Plásticas', 'paquete', 10.000, 5.000, 15.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Envases Descartables', 'paquete', 12.000, 6.000, 18.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Gas Licuado', 'balón', 3.000, 1.000, 55.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Detergente', 'kg', 8.000, 4.000, 12.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Lejía', 'litro', 10.000, 5.000, 4.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ============================================
-- 4. RECETAS - INGREDIENTES POR PLATO
-- ============================================

-- Ceviche Clásico (menu_item_id = 1)
INSERT INTO recipe_items (menu_item_id, stock_item_id, quantity, created_at, updated_at) VALUES
(1, 1, 0.250, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Pescado 250g
(1, 7, 0.080, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Limón 80g
(1, 8, 0.050, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Cebolla 50g
(1, 9, 0.010, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Ají limo 10g
(1, 10, 0.020, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Cilantro 20g
(1, 15, 0.100, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Camote 100g
(1, 17, 1.000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Choclo 1 unidad

-- Ceviche Mixto (menu_item_id = 2)
(2, 1, 0.150, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Pescado 150g
(2, 2, 0.050, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Langostinos 50g
(2, 3, 0.050, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Pulpo 50g
(2, 4, 0.050, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Calamar 50g
(2, 7, 0.100, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Limón 100g
(2, 8, 0.060, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Cebolla 60g
(2, 9, 0.015, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Ají limo 15g
(2, 15, 0.100, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Camote 100g

-- Ceviche de Conchas Negras (menu_item_id = 3)
(3, 5, 0.300, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Conchas 300g
(3, 7, 0.100, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Limón 100g
(3, 8, 0.040, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Cebolla 40g
(3, 9, 0.015, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Ají limo 15g

-- Chicharrón de Pescado (menu_item_id = 6)
(6, 1, 0.300, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Pescado 300g
(6, 16, 0.150, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Yuca 150g
(6, 24, 0.050, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Aceite 50ml
(6, 8, 0.040, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Cebolla 40g

-- Chicharrón de Calamar (menu_item_id = 7)
(7, 4, 0.250, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Calamar 250g
(7, 24, 0.050, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Aceite 50ml
(7, 16, 0.150, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Yuca 150g

-- Causa Rellena (menu_item_id = 11)
(11, 14, 0.300, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Papa amarilla 300g
(11, 7, 0.030, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Limón 30g
(11, 9, 0.010, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Ají limo 10g

-- Tiradito Clásico (menu_item_id = 13)
(13, 1, 0.200, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Pescado 200g
(13, 7, 0.050, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Limón 50g
(13, 23, 0.030, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Ají amarillo 30g

-- Leche de Tigre (menu_item_id = 15)
(15, 1, 0.150, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Pescado 150g
(15, 7, 0.080, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Limón 80g
(15, 8, 0.030, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Cebolla 30g
(15, 9, 0.015, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Ají limo 15g

-- Arroz con Mariscos (menu_item_id = 16)
(16, 18, 0.200, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Arroz 200g
(16, 6, 0.200, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Mix mariscos 200g
(16, 8, 0.050, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Cebolla 50g
(16, 11, 0.020, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Ajo 20g
(16, 24, 0.030, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Aceite 30ml

-- Sudado de Pescado (menu_item_id = 19)
(19, 1, 0.300, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Pescado 300g
(19, 12, 0.100, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Tomate 100g
(19, 8, 0.050, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Cebolla 50g
(19, 10, 0.020, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Cilantro 20g

-- Parihuela Personal (menu_item_id = 21)
(21, 6, 0.250, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Mix mariscos 250g
(21, 1, 0.100, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Pescado 100g
(21, 12, 0.080, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Tomate 80g
(21, 8, 0.050, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Cebolla 50g
(21, 11, 0.020, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Ajo 20g

-- Chicha Morada (menu_item_id = 29)
(29, 36, 0.200, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Maíz morado 200g
(29, 37, 0.100, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Piña 100g
(29, 38, 0.080, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Azúcar 80g

-- Limonada Frozen (menu_item_id = 30)
(30, 7, 0.150, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),  -- Limón 150g
(30, 38, 0.060, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Azúcar 60g

-- Café Pasado (menu_item_id = 35)
(35, 40, 0.020, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), -- Café 20g
(35, 38, 0.015, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); -- Azúcar 15g

-- ============================================
-- 5. ÓRDENES DE VENTA (ÚLTIMOS 30 DÍAS)
-- ============================================

-- SEMANA 1: 01-07 Noviembre 2024
-- Orden 1: Almuerzo familiar
INSERT INTO orders (order_number, client_id, table_number, order_type, status, subtotal, tax, discount, total, order_date, created_by, created_at, updated_at, voucher_type, voucher_number) VALUES
('ORD-2024-001', 1, '5', 'salon', 'completed', 178.00, 32.04, 0.00, 210.04, '2024-11-01 13:15:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'ticket', 'B001-0001');

INSERT INTO order_lines (order_id, menu_item_id, quantity, price_at_sale, discount, line_total, created_at) VALUES
(1, 2, 2, 35.00, 0.00, 70.00, CURRENT_TIMESTAMP),  -- Ceviche Mixto x2
(1, 6, 1, 28.00, 0.00, 28.00, CURRENT_TIMESTAMP),  -- Chicharrón Pescado
(1, 16, 2, 32.00, 0.00, 64.00, CURRENT_TIMESTAMP), -- Arroz con Mariscos x2
(1, 24, 2, 8.00, 0.00, 16.00, CURRENT_TIMESTAMP);  -- Inca Kola 1.5L x2

INSERT INTO payments (order_id, method, amount, payment_date, created_by, created_at) VALUES
(1, 'cash', 210.04, '2024-11-01 13:45:00', 2, CURRENT_TIMESTAMP);

-- Orden 2: Almuerzo ejecutivo
INSERT INTO orders (order_number, client_id, table_number, order_type, status, subtotal, tax, discount, total, order_date, created_by, created_at, updated_at, voucher_type, voucher_number) VALUES
('ORD-2024-002', 1, '3', 'salon', 'completed', 86.00, 15.48, 0.00, 101.48, '2024-11-01 14:30:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'ticket', 'B001-0002');

INSERT INTO order_lines (order_id, menu_item_id, quantity, price_at_sale, discount, line_total, created_at) VALUES
(2, 1, 2, 25.00, 0.00, 50.00, CURRENT_TIMESTAMP),  -- Ceviche Clásico x2
(2, 15, 2, 15.00, 0.00, 30.00, CURRENT_TIMESTAMP), -- Leche de Tigre x2
(2, 27, 2, 4.00, 0.00, 8.00, CURRENT_TIMESTAMP);   -- Inca Kola Personal x2

INSERT INTO payments (order_id, method, amount, payment_date, created_by, created_at) VALUES
(2, 'yape', 101.48, '2024-11-01 15:00:00', 2, CURRENT_TIMESTAMP);

-- Orden 3: Delivery
INSERT INTO orders (order_number, client_id, order_type, status, subtotal, tax, discount, total, order_date, created_by, created_at, updated_at, voucher_type, voucher_number) VALUES
('ORD-2024-003', 4, 'delivery', 'completed', 120.00, 21.60, 0.00, 141.60, '2024-11-02 19:20:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'ticket', 'B001-0003');

INSERT INTO order_lines (order_id, menu_item_id, quantity, price_at_sale, discount, line_total, created_at) VALUES
(3, 3, 2, 45.00, 0.00, 90.00, CURRENT_TIMESTAMP),  -- Ceviche Conchas x2
(3, 29, 2, 10.00, 0.00, 20.00, CURRENT_TIMESTAMP), -- Chicha Morada x2
(3, 39, 2, 5.00, 0.00, 10.00, CURRENT_TIMESTAMP);  -- Yucas Fritas x2

INSERT INTO payments (order_id, method, amount, payment_date, created_by, created_at) VALUES
(3, 'plin', 141.60, '2024-11-02 19:25:00', 2, CURRENT_TIMESTAMP);

-- Orden 4: Grupo grande
INSERT INTO orders (order_number, client_id, table_number, order_type, status, subtotal, tax, discount, total, order_date, created_by, created_at, updated_at, voucher_type, voucher_number) VALUES
('ORD-2024-004', 1, '8', 'salon', 'completed', 265.00, 47.70, 15.00, 297.70, '2024-11-03 13:00:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'ticket', 'B001-0004');

INSERT INTO order_lines (order_id, menu_item_id, quantity, price_at_sale, discount, line_total, created_at) VALUES
(4, 10, 1, 85.00, 0.00, 85.00, CURRENT_TIMESTAMP),  -- Jalea Familiar
(4, 22, 1, 75.00, 0.00, 75.00, CURRENT_TIMESTAMP),  -- Parihuela Familiar
(4, 2, 2, 35.00, 0.00, 70.00, CURRENT_TIMESTAMP),   -- Ceviche Mixto x2
(4, 31, 3, 10.00, 0.00, 30.00, CURRENT_TIMESTAMP),  -- Cerveza Cristal x3
(4, 27, 2, 4.00, 0.00, 8.00, CURRENT_TIMESTAMP);    -- Inca Kola Personal x2

INSERT INTO payments (order_id, method, amount, payment_date, created_by, created_at) VALUES
(4, 'card', 297.70, '2024-11-03 14:15:00', 2, CURRENT_TIMESTAMP);

-- SEMANA 2: Más ventas
INSERT INTO orders (order_number, client_id, table_number, order_type, status, subtotal, tax, discount, total, order_date, created_by, created_at, updated_at) VALUES
('ORD-2024-005', 1, '2', 'salon', 'completed', 95.00, 17.10, 0.00, 112.10, '2024-11-08 12:30:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('ORD-2024-006', 5, 'delivery', 'completed', 138.00, 24.84, 0.00, 162.84, '2024-11-08 20:00:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('ORD-2024-007', 1, '4', 'salon', 'completed', 156.00, 28.08, 0.00, 184.08, '2024-11-09 13:15:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('ORD-2024-008', 1, '1', 'salon', 'completed', 68.00, 12.24, 0.00, 80.24, '2024-11-10 14:00:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO order_lines (order_id, menu_item_id, quantity, price_at_sale, discount, line_total, created_at) VALUES
-- Orden 5
(5, 1, 2, 25.00, 0.00, 50.00, CURRENT_TIMESTAMP),
(5, 6, 1, 28.00, 0.00, 28.00, CURRENT_TIMESTAMP),
(5, 30, 1, 8.00, 0.00, 8.00, CURRENT_TIMESTAMP),
(5, 27, 2, 4.00, 0.00, 8.00, CURRENT_TIMESTAMP),
-- Orden 6
(6, 4, 2, 40.00, 0.00, 80.00, CURRENT_TIMESTAMP),
(6, 13, 1, 28.00, 0.00, 28.00, CURRENT_TIMESTAMP),
(6, 29, 2, 10.00, 0.00, 20.00, CURRENT_TIMESTAMP),
(6, 39, 2, 5.00, 0.00, 10.00, CURRENT_TIMESTAMP),
-- Orden 7
(7, 2, 3, 35.00, 0.00, 105.00, CURRENT_TIMESTAMP),
(7, 7, 1, 32.00, 0.00, 32.00, CURRENT_TIMESTAMP),
(7, 31, 2, 10.00, 0.00, 20.00, CURRENT_TIMESTAMP),
-- Orden 8
(8, 1, 2, 25.00, 0.00, 50.00, CURRENT_TIMESTAMP),
(8, 27, 2, 4.00, 0.00, 8.00, CURRENT_TIMESTAMP),
(8, 38, 2, 5.00, 0.00, 10.00, CURRENT_TIMESTAMP);

INSERT INTO payments (order_id, method, amount, payment_date, created_by, created_at) VALUES
(5, 'yape', 112.10, '2024-11-08 13:00:00', 2, CURRENT_TIMESTAMP),
(6, 'cash', 162.84, '2024-11-08 20:10:00', 2, CURRENT_TIMESTAMP),
(7, 'card', 184.08, '2024-11-09 13:45:00', 2, CURRENT_TIMESTAMP),
(8, 'cash', 80.24, '2024-11-10 14:20:00', 2, CURRENT_TIMESTAMP);

-- SEMANA 3 y 4: Ventas adicionales (simplificadas)
INSERT INTO orders (order_number, status, subtotal, tax, discount, total, order_date, created_by, created_at, updated_at) VALUES
('ORD-2024-009', 'completed', 125.00, 22.50, 0.00, 147.50, '2024-11-15 13:00:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('ORD-2024-010', 'completed', 98.00, 17.64, 0.00, 115.64, '2024-11-16 14:30:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('ORD-2024-011', 'completed', 215.00, 38.70, 0.00, 253.70, '2024-11-17 12:00:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('ORD-2024-012', 'completed', 85.00, 15.30, 0.00, 100.30, '2024-11-22 13:30:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('ORD-2024-013', 'completed', 165.00, 29.70, 0.00, 194.70, '2024-11-23 19:00:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('ORD-2024-014', 'completed', 142.00, 25.56, 0.00, 167.56, '2024-11-24 12:45:00', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO order_lines (order_id, menu_item_id, quantity, price_at_sale, discount, line_total, created_at) VALUES
(9, 2, 2, 35.00, 0.00, 70.00, CURRENT_TIMESTAMP),
(9, 16, 1, 32.00, 0.00, 32.00, CURRENT_TIMESTAMP),
(9, 31, 2, 10.00, 0.00, 20.00, CURRENT_TIMESTAMP),
(10, 1, 3, 25.00, 0.00, 75.00, CURRENT_TIMESTAMP),
(10, 29, 2, 10.00, 0.00, 20.00, CURRENT_TIMESTAMP),
(11, 10, 1, 85.00, 0.00, 85.00, CURRENT_TIMESTAMP),
(11, 3, 2, 45.00, 0.00, 90.00, CURRENT_TIMESTAMP),
(11, 31, 4, 10.00, 0.00, 40.00, CURRENT_TIMESTAMP),
(12, 6, 2, 28.00, 0.00, 56.00, CURRENT_TIMESTAMP),
(12, 15, 1, 15.00, 0.00, 15.00, CURRENT_TIMESTAMP),
(12, 27, 2, 4.00, 0.00, 8.00, CURRENT_TIMESTAMP),
(13, 4, 3, 40.00, 0.00, 120.00, CURRENT_TIMESTAMP),
(13, 19, 1, 28.00, 0.00, 28.00, CURRENT_TIMESTAMP),
(13, 29, 1, 10.00, 0.00, 10.00, CURRENT_TIMESTAMP),
(14, 2, 3, 35.00, 0.00, 105.00, CURRENT_TIMESTAMP),
(14, 30, 2, 8.00, 0.00, 16.00, CURRENT_TIMESTAMP),
(14, 31, 2, 10.00, 0.00, 20.00, CURRENT_TIMESTAMP);

INSERT INTO payments (order_id, method, amount, payment_date, created_by, created_at) VALUES
(9, 'card', 147.50, '2024-11-15 13:30:00', 2, CURRENT_TIMESTAMP),
(10, 'yape', 115.64, '2024-11-16 15:00:00', 2, CURRENT_TIMESTAMP),
(11, 'cash', 253.70, '2024-11-17 12:45:00', 2, CURRENT_TIMESTAMP),
(12, 'cash', 100.30, '2024-11-22 14:00:00', 2, CURRENT_TIMESTAMP),
(13, 'card', 194.70, '2024-11-23 19:30:00', 2, CURRENT_TIMESTAMP),
(14, 'yape', 167.56, '2024-11-24 13:15:00', 2, CURRENT_TIMESTAMP);

-- ============================================
-- 6. GASTOS OPERATIVOS (NOVIEMBRE 2024)
-- ============================================

-- GASTOS SEMANA 1: 01-07 Noviembre
-- Compras de insumos
INSERT INTO expenses (category, amount, tax, total, description, receipt_reference, is_paid, expense_date, supplier_id, created_by, created_at, updated_at) VALUES
('supplies', 850.00, 153.00, 1003.00, 'Compra semanal de pescado fresco (corvina, calamar)', 'F001-12345', true, '2024-11-01 07:00:00', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('supplies', 320.00, 57.60, 377.60, 'Verduras frescas: limones, cebollas, ajíes', 'B002-5678', true, '2024-11-01 08:00:00', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('supplies', 280.00, 50.40, 330.40, 'Bebidas: gaseosas y cervezas', 'F001-9012', true, '2024-11-02 09:00:00', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Gastos de personal
('staff', 1200.00, 0.00, 1200.00, 'Pago quincenal - 3 empleados', NULL, true, '2024-11-01 18:00:00', NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Servicios básicos
('services', 185.00, 33.30, 218.30, 'Recibo de luz - Octubre 2024', 'ELECT-OCT-2024', true, '2024-11-03 10:00:00', NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('services', 95.00, 17.10, 112.10, 'Recibo de agua - Octubre 2024', 'AGUA-OCT-2024', true, '2024-11-03 10:30:00', NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Mantenimiento
('maintenance', 150.00, 27.00, 177.00, 'Reparación de refrigeradora', 'B001-7890', true, '2024-11-04 15:00:00', NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Transporte
('transport', 65.00, 11.70, 76.70, 'Delivery varios - Semana 1', NULL, true, '2024-11-06 20:00:00', NULL, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Suministros operativos
('supplies', 125.00, 22.50, 147.50, 'Envases descartables, servilletas, bolsas', 'F001-3344', true, '2024-11-05 11:00:00', 4, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- GASTOS SEMANA 2: 08-14 Noviembre
INSERT INTO expenses (category, amount, tax, total, description, receipt_reference, is_paid, expense_date, supplier_id, created_by, created_at, updated_at) VALUES
('supplies', 920.00, 165.60, 1085.60, 'Pescados y mariscos frescos - Semana 2', 'F001-12389', true, '2024-11-08 07:30:00', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('supplies', 380.00, 68.40, 448.40, 'Verduras, tubérculos y condimentos', 'B002-5690', true, '2024-11-08 08:30:00', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('supplies', 255.00, 45.90, 300.90, 'Bebidas y jugos naturales', 'F001-9034', true, '2024-11-09 09:00:00', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Gas
('services', 165.00, 29.70, 194.70, 'Balones de gas x3', 'B003-4455', true, '2024-11-10 10:00:00', 5, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Limpieza
('supplies', 85.00, 15.30, 100.30, 'Productos de limpieza y desinfección', 'B001-5566', true, '2024-11-11 11:00:00', 4, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Marketing
('marketing', 200.00, 36.00, 236.00, 'Volantes publicitarios para promoción', 'F001-7788', true, '2024-11-12 14:00:00', NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Transporte
('transport', 72.00, 12.96, 84.96, 'Delivery varios - Semana 2', NULL, true, '2024-11-14 20:00:00', NULL, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- GASTOS SEMANA 3: 15-21 Noviembre
INSERT INTO expenses (category, amount, tax, total, description, receipt_reference, is_paid, expense_date, supplier_id, created_by, created_at, updated_at) VALUES
('supplies', 1050.00, 189.00, 1239.00, 'Compra grande: pescados premium y langostinos', 'F001-12445', true, '2024-11-15 07:00:00', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('supplies', 415.00, 74.70, 489.70, 'Verduras, limones (precio alto) y ajíes', 'B002-5712', true, '2024-11-15 08:00:00', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Pago quincenal staff
('staff', 1200.00, 0.00, 1200.00, 'Pago quincenal - 3 empleados', NULL, true, '2024-11-15 18:00:00', NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

('supplies', 290.00, 52.20, 342.20, 'Bebidas y cervezas - reposición', 'F001-9067', true, '2024-11-16 09:30:00', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Mantenimiento preventivo
('maintenance', 180.00, 32.40, 212.40, 'Mantenimiento de cocina industrial', 'B001-6677', true, '2024-11-17 16:00:00', NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Internet
('services', 120.00, 21.60, 141.60, 'Internet - Noviembre 2024', 'INET-NOV-2024', true, '2024-11-18 10:00:00', NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Transporte
('transport', 58.00, 10.44, 68.44, 'Delivery varios - Semana 3', NULL, true, '2024-11-20 20:00:00', NULL, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- GASTOS SEMANA 4: 22-28 Noviembre
INSERT INTO expenses (category, amount, tax, total, description, receipt_reference, is_paid, expense_date, supplier_id, created_by, created_at, updated_at) VALUES
('supplies', 880.00, 158.40, 1038.40, 'Pescados y mariscos - Semana 4', 'F001-12501', true, '2024-11-22 07:00:00', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('supplies', 350.00, 63.00, 413.00, 'Verduras y tubérculos frescos', 'B002-5789', true, '2024-11-22 08:00:00', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('supplies', 265.00, 47.70, 312.70, 'Bebidas variadas', 'F001-9089', true, '2024-11-23 09:00:00', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Impuestos
('taxes', 450.00, 0.00, 450.00, 'Pago a cuenta IGV - Octubre 2024', 'SUNAT-OCT-2024', true, '2024-11-25 11:00:00', NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Suministros
('supplies', 95.00, 17.10, 112.10, 'Envases y utensilios descartables', 'B001-8899', true, '2024-11-24 12:00:00', 4, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Otros
('other', 120.00, 21.60, 141.60, 'Uniformes nuevos para personal', 'F001-2233', true, '2024-11-26 15:00:00', NULL, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Transporte
('transport', 48.00, 8.64, 56.64, 'Delivery varios - Semana 4', NULL, false, '2024-11-27 20:00:00', NULL, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Pagos de los gastos
INSERT INTO payments (expense_id, method, amount, payment_date, created_by, created_at, notes) VALUES
-- Semana 1
(1, 'transfer', 1003.00, '2024-11-01 07:05:00', 1, CURRENT_TIMESTAMP, 'Transferencia Pescados del Mar'),
(2, 'cash', 377.60, '2024-11-01 08:05:00', 1, CURRENT_TIMESTAMP, 'Pago en efectivo'),
(3, 'transfer', 330.40, '2024-11-02 09:05:00', 1, CURRENT_TIMESTAMP, 'Transferencia Bebidas y Más'),
(4, 'transfer', 1200.00, '2024-11-01 18:05:00', 1, CURRENT_TIMESTAMP, 'Pago planilla quincena 1'),
(5, 'transfer', 218.30, '2024-11-03 10:05:00', 1, CURRENT_TIMESTAMP, 'Pago recibo luz'),
(6, 'transfer', 112.10, '2024-11-03 10:35:00', 1, CURRENT_TIMESTAMP, 'Pago recibo agua'),
(7, 'cash', 177.00, '2024-11-04 15:05:00', 1, CURRENT_TIMESTAMP, 'Reparación refrigeradora'),
(8, 'cash', 76.70, '2024-11-06 20:05:00', 2, CURRENT_TIMESTAMP, 'Gastos delivery semana'),
(9, 'cash', 147.50, '2024-11-05 11:05:00', 1, CURRENT_TIMESTAMP, 'Compra suministros'),

-- Semana 2
(10, 'transfer', 1085.60, '2024-11-08 07:35:00', 1, CURRENT_TIMESTAMP, 'Pago pescados semana 2'),
(11, 'cash', 448.40, '2024-11-08 08:35:00', 1, CURRENT_TIMESTAMP, 'Compra verduras'),
(12, 'transfer', 300.90, '2024-11-09 09:05:00', 1, CURRENT_TIMESTAMP, 'Compra bebidas'),
(13, 'cash', 194.70, '2024-11-10 10:05:00', 1, CURRENT_TIMESTAMP, 'Compra gas'),
(14, 'cash', 100.30, '2024-11-11 11:05:00', 1, CURRENT_TIMESTAMP, 'Productos limpieza'),
(15, 'transfer', 236.00, '2024-11-12 14:05:00', 1, CURRENT_TIMESTAMP, 'Pago publicidad'),
(16, 'cash', 84.96, '2024-11-14 20:05:00', 2, CURRENT_TIMESTAMP, 'Delivery semana 2'),

-- Semana 3
(17, 'transfer', 1239.00, '2024-11-15 07:05:00', 1, CURRENT_TIMESTAMP, 'Compra pescados premium'),
(18, 'cash', 489.70, '2024-11-15 08:05:00', 1, CURRENT_TIMESTAMP, 'Verduras semana 3'),
(19, 'transfer', 1200.00, '2024-11-15 18:05:00', 1, CURRENT_TIMESTAMP, 'Pago planilla quincena 2'),
(20, 'transfer', 342.20, '2024-11-16 09:35:00', 1, CURRENT_TIMESTAMP, 'Reposición bebidas'),
(21, 'cash', 212.40, '2024-11-17 16:05:00', 1, CURRENT_TIMESTAMP, 'Mantenimiento cocina'),
(22, 'transfer', 141.60, '2024-11-18 10:05:00', 1, CURRENT_TIMESTAMP, 'Pago internet'),
(23, 'cash', 68.44, '2024-11-20 20:05:00', 2, CURRENT_TIMESTAMP, 'Delivery semana 3'),

-- Semana 4
(24, 'transfer', 1038.40, '2024-11-22 07:05:00', 1, CURRENT_TIMESTAMP, 'Pescados semana 4'),
(25, 'cash', 413.00, '2024-11-22 08:05:00', 1, CURRENT_TIMESTAMP, 'Verduras semana 4'),
(26, 'transfer', 312.70, '2024-11-23 09:05:00', 1, CURRENT_TIMESTAMP, 'Bebidas semana 4'),
(27, 'transfer', 450.00, '2024-11-25 11:05:00', 1, CURRENT_TIMESTAMP, 'Pago impuestos SUNAT'),
(28, 'cash', 112.10, '2024-11-24 12:05:00', 1, CURRENT_TIMESTAMP, 'Suministros varios'),
(29, 'cash', 141.60, '2024-11-26 15:05:00', 1, CURRENT_TIMESTAMP, 'Uniformes personal');

-- ============================================
-- 7. MOVIMIENTOS DE STOCK (ENTRADAS Y SALIDAS)
-- ============================================

-- ENTRADAS DE STOCK - SEMANA 1 (Noviembre 1-7)
-- Compra de pescados y mariscos (relacionado con expense_id 1)
INSERT INTO stock_movements (stock_item_id, movement_type, quantity, movement_date, created_by, notes, supplier_id, related_expense_id, unit_cost, total_cost, created_at) VALUES
(1, 'in', 30.000, '2024-11-01 07:30:00', 1, 'Compra semanal pescado fresco', 1, 1, 18.00, 540.00, CURRENT_TIMESTAMP),
(4, 'in', 15.000, '2024-11-01 07:30:00', 1, 'Compra calamar fresco', 1, 1, 22.00, 330.00, CURRENT_TIMESTAMP),
(3, 'in', 8.000, '2024-11-01 07:30:00', 1, 'Compra pulpo', 1, 1, 28.00, 224.00, CURRENT_TIMESTAMP),

-- Compra de verduras (relacionado con expense_id 2)
(7, 'in', 20.000, '2024-11-01 08:30:00', 1, 'Limones frescos', 2, 2, 3.50, 70.00, CURRENT_TIMESTAMP),
(8, 'in', 15.000, '2024-11-01 08:30:00', 1, 'Cebollas rojas', 2, 2, 2.80, 42.00, CURRENT_TIMESTAMP),
(9, 'in', 3.000, '2024-11-01 08:30:00', 1, 'Ají limo', 2, 2, 12.00, 36.00, CURRENT_TIMESTAMP),
(10, 'in', 10.000, '2024-11-01 08:30:00', 1, 'Cilantro fresco', 2, 2, 1.50, 15.00, CURRENT_TIMESTAMP),

-- Compra de bebidas (relacionado con expense_id 3)
(29, 'in', 24.000, '2024-11-02 09:30:00', 1, 'Inca Kola 1.5L', 3, 3, 4.50, 108.00, CURRENT_TIMESTAMP),
(30, 'in', 24.000, '2024-11-02 09:30:00', 1, 'Coca Cola 1.5L', 3, 3, 4.50, 108.00, CURRENT_TIMESTAMP),
(33, 'in', 24.000, '2024-11-02 09:30:00', 1, 'Cerveza Cristal', 3, 3, 5.50, 132.00, CURRENT_TIMESTAMP);

-- SALIDAS DE STOCK - Orden 1 (2024-11-01)
INSERT INTO stock_movements (stock_item_id, movement_type, quantity, movement_date, created_by, notes, related_order_id, created_at) VALUES
-- Ceviche Mixto x2
(1, 'out', 0.300, '2024-11-01 13:15:00', 3, 'Uso en Ceviche Mixto x2', 1, CURRENT_TIMESTAMP),
(2, 'out', 0.100, '2024-11-01 13:15:00', 3, 'Langostinos para Ceviche Mixto x2', 1, CURRENT_TIMESTAMP),
(3, 'out', 0.100, '2024-11-01 13:15:00', 3, 'Pulpo para Ceviche Mixto x2', 1, CURRENT_TIMESTAMP),
(4, 'out', 0.100, '2024-11-01 13:15:00', 3, 'Calamar para Ceviche Mixto x2', 1, CURRENT_TIMESTAMP),
(7, 'out', 0.200, '2024-11-01 13:15:00', 3, 'Limones Ceviche Mixto x2', 1, CURRENT_TIMESTAMP),
-- Chicharrón de Pescado
(1, 'out', 0.300, '2024-11-01 13:15:00', 3, 'Pescado para chicharrón', 1, CURRENT_TIMESTAMP),
(16, 'out', 0.150, '2024-11-01 13:15:00', 3, 'Yuca frita', 1, CURRENT_TIMESTAMP),
-- Arroz con Mariscos x2
(18, 'out', 0.400, '2024-11-01 13:15:00', 3, 'Arroz x2 platos', 1, CURRENT_TIMESTAMP),
(6, 'out', 0.400, '2024-11-01 13:15:00', 3, 'Mix mariscos x2 platos', 1, CURRENT_TIMESTAMP),
-- Bebidas
(29, 'out', 2.000, '2024-11-01 13:15:00', 3, 'Inca Kola 1.5L x2', 1, CURRENT_TIMESTAMP);

-- ENTRADAS - SEMANA 2 (Noviembre 8-14)
INSERT INTO stock_movements (stock_item_id, movement_type, quantity, movement_date, created_by, notes, supplier_id, related_expense_id, unit_cost, total_cost, created_at) VALUES
(1, 'in', 35.000, '2024-11-08 07:30:00', 1, 'Reposición pescado semana 2', 1, 10, 18.00, 630.00, CURRENT_TIMESTAMP),
(2, 'in', 10.000, '2024-11-08 07:30:00', 1, 'Langostinos frescos', 1, 10, 35.00, 350.00, CURRENT_TIMESTAMP),
(7, 'in', 25.000, '2024-11-08 08:30:00', 1, 'Limones', 2, 11, 3.50, 87.50, CURRENT_TIMESTAMP),
(8, 'in', 18.000, '2024-11-08 08:30:00', 1, 'Cebollas', 2, 11, 2.80, 50.40, CURRENT_TIMESTAMP),
(29, 'in', 20.000, '2024-11-09 09:30:00', 1, 'Reposición Inca Kola', 3, 12, 4.50, 90.00, CURRENT_TIMESTAMP),
(33, 'in', 20.000, '2024-11-09 09:30:00', 1, 'Reposición cervezas', 3, 12, 5.50, 110.00, CURRENT_TIMESTAMP);

-- ENTRADAS - SEMANA 3 (Noviembre 15-21)
INSERT INTO stock_movements (stock_item_id, movement_type, quantity, movement_date, created_by, notes, supplier_id, related_expense_id, unit_cost, total_cost, created_at) VALUES
(1, 'in', 40.000, '2024-11-15 07:30:00', 1, 'Pescado premium semana 3', 1, 17, 18.00, 720.00, CURRENT_TIMESTAMP),
(2, 'in', 12.000, '2024-11-15 07:30:00', 1, 'Langostinos grandes', 1, 17, 35.00, 420.00, CURRENT_TIMESTAMP),
(5, 'in', 6.000, '2024-11-15 07:30:00', 1, 'Conchas negras', 1, 17, 45.00, 270.00, CURRENT_TIMESTAMP),
(7, 'in', 30.000, '2024-11-15 08:30:00', 1, 'Limones (precio alto)', 2, 18, 4.00, 120.00, CURRENT_TIMESTAMP),
(8, 'in', 20.000, '2024-11-15 08:30:00', 1, 'Cebollas rojas', 2, 18, 2.80, 56.00, CURRENT_TIMESTAMP),
(29, 'in', 18.000, '2024-11-16 09:30:00', 1, 'Gaseosas variadas', 3, 20, 4.50, 81.00, CURRENT_TIMESTAMP),
(33, 'in', 24.000, '2024-11-16 09:30:00', 1, 'Cervezas reposición', 3, 20, 5.50, 132.00, CURRENT_TIMESTAMP);

-- ENTRADAS - SEMANA 4 (Noviembre 22-28)
INSERT INTO stock_movements (stock_item_id, movement_type, quantity, movement_date, created_by, notes, supplier_id, related_expense_id, unit_cost, total_cost, created_at) VALUES
(1, 'in', 38.000, '2024-11-22 07:30:00', 1, 'Pescado semana 4', 1, 24, 18.00, 684.00, CURRENT_TIMESTAMP),
(4, 'in', 15.000, '2024-11-22 07:30:00', 1, 'Calamar fresco', 1, 24, 22.00, 330.00, CURRENT_TIMESTAMP),
(7, 'in', 28.000, '2024-11-22 08:30:00', 1, 'Limones frescos', 2, 25, 3.50, 98.00, CURRENT_TIMESTAMP),
(14, 'in', 20.000, '2024-11-22 08:30:00', 1, 'Papa amarilla', 2, 25, 3.50, 70.00, CURRENT_TIMESTAMP),
(29, 'in', 20.000, '2024-11-23 09:30:00', 1, 'Inca Kola reposición', 3, 26, 4.50, 90.00, CURRENT_TIMESTAMP),
(30, 'in', 16.000, '2024-11-23 09:30:00', 1, 'Coca Cola reposición', 3, 26, 4.50, 72.00, CURRENT_TIMESTAMP);

-- AJUSTES DE INVENTARIO (mermas, deterioros)
INSERT INTO stock_movements (stock_item_id, movement_type, quantity, movement_date, created_by, notes, created_at) VALUES
(1, 'waste', 2.000, '2024-11-07 20:00:00', 1, 'Pescado no vendido - deterioro', CURRENT_TIMESTAMP),
(7, 'waste', 1.500, '2024-11-07 20:00:00', 1, 'Limones muy maduros', CURRENT_TIMESTAMP),
(8, 'waste', 0.800, '2024-11-14 20:00:00', 1, 'Cebollas deterioradas', CURRENT_TIMESTAMP),
(10, 'waste', 2.000, '2024-11-14 20:00:00', 1, 'Cilantro marchito', CURRENT_TIMESTAMP),
(1, 'waste', 1.500, '2024-11-21 20:00:00', 1, 'Pescado sobrante fin de semana', CURRENT_TIMESTAMP),
(4, 'waste', 0.500, '2024-11-27 20:00:00', 1, 'Calamar deteriorado', CURRENT_TIMESTAMP);

-- AJUSTE POR CONTEO FÍSICO
INSERT INTO stock_movements (stock_item_id, movement_type, quantity, movement_date, created_by, notes, created_at) VALUES
(18, 'adjustment', 5.000, '2024-11-15 21:00:00', 1, 'Ajuste inventario arroz (+5kg encontrado)', CURRENT_TIMESTAMP),
(29, 'adjustment', -3.000, '2024-11-20 21:00:00', 1, 'Ajuste inventario Inca Kola (-3 unidades faltantes)', CURRENT_TIMESTAMP);

-- ============================================
-- 8. APERTURAS Y CIERRES DE CAJA
-- ============================================

-- SEMANA 1 - Noviembre 2024
INSERT INTO cash_registers (user_id, status, opening_amount, closing_amount, expected_amount, difference, notes, opened_at, closed_at, created_at) VALUES
-- Día 1: Viernes 01 Nov
(2, 'closed', 200.00, 785.50, 782.14, 3.36, 'Día con buenas ventas. Diferencia menor por redondeo en cambios', '2024-11-01 11:00:00', '2024-11-01 21:00:00', CURRENT_TIMESTAMP),

-- Día 2: Sábado 02 Nov
(2, 'closed', 200.00, 650.30, 648.94, 1.36, 'Buen día de ventas delivery', '2024-11-02 11:00:00', '2024-11-02 21:00:00', CURRENT_TIMESTAMP),

-- Día 3: Domingo 03 Nov
(2, 'closed', 200.00, 890.25, 895.40, -5.15, 'Domingo lleno. Diferencia negativa por vuelto mal dado', '2024-11-03 11:00:00', '2024-11-03 22:00:00', CURRENT_TIMESTAMP),

-- Día 4: Lunes 04 Nov (día tranquilo)
(2, 'closed', 200.00, 385.60, 385.60, 0.00, 'Día tranquilo. Cuadre perfecto', '2024-11-04 11:00:00', '2024-11-04 20:00:00', CURRENT_TIMESTAMP),

-- SEMANA 2
-- Día 8: Viernes 08 Nov
(2, 'closed', 200.00, 745.80, 742.34, 3.46, 'Viernes con buen movimiento', '2024-11-08 11:00:00', '2024-11-08 21:00:00', CURRENT_TIMESTAMP),

-- Día 9: Sábado 09 Nov
(2, 'closed', 200.00, 825.50, 821.92, 3.58, 'Sábado normal. Pequeña diferencia por monedas', '2024-11-09 11:00:00', '2024-11-09 21:30:00', CURRENT_TIMESTAMP),

-- Día 10: Domingo 10 Nov
(2, 'closed', 200.00, 580.40, 580.54, -0.14, 'Domingo más tranquilo que anterior', '2024-11-10 11:00:00', '2024-11-10 20:30:00', CURRENT_TIMESTAMP),

-- SEMANA 3
-- Día 15: Viernes 15 Nov
(2, 'closed', 200.00, 920.75, 915.20, 5.55, 'Muy buen viernes. Cliente dejó propina incluida en caja', '2024-11-15 11:00:00', '2024-11-15 21:00:00', CURRENT_TIMESTAMP),

-- Día 16: Sábado 16 Nov
(2, 'closed', 200.00, 715.80, 713.64, 2.16, 'Sábado regular', '2024-11-16 11:00:00', '2024-11-16 21:00:00', CURRENT_TIMESTAMP),

-- Día 17: Domingo 17 Nov
(2, 'closed', 200.00, 1050.25, 1053.70, -3.45, 'Excelente domingo con grupo grande', '2024-11-17 11:00:00', '2024-11-17 22:00:00', CURRENT_TIMESTAMP),

-- SEMANA 4
-- Día 22: Viernes 22 Nov
(2, 'closed', 200.00, 685.40, 685.30, 0.10, 'Viernes normal, buen cuadre', '2024-11-22 11:00:00', '2024-11-22 21:00:00', CURRENT_TIMESTAMP),

-- Día 23: Sábado 23 Nov
(2, 'closed', 200.00, 895.50, 894.70, 0.80, 'Sábado con buenas ventas', '2024-11-23 11:00:00', '2024-11-23 21:30:00', CURRENT_TIMESTAMP),

-- Día 24: Domingo 24 Nov
(2, 'closed', 200.00, 765.30, 767.56, -2.26, 'Domingo moderado', '2024-11-24 11:00:00', '2024-11-24 20:30:00', CURRENT_TIMESTAMP),

-- Día 27: Miércoles 27 Nov (hoy - caja abierta)
(2, 'open', 200.00, NULL, NULL, NULL, 'Caja del día en curso', '2024-11-27 11:00:00', NULL, CURRENT_TIMESTAMP);