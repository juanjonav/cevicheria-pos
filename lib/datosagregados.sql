-- ============================================
-- INSERTS CORREGIDOS CON TODOS LOS CAMPOS OBLIGATORIOS
-- ============================================

-- 1. Usuario administrador
INSERT INTO users (username, password_hash, full_name, role, is_active, created_at, updated_at) VALUES
('admin', '$2a$10$dummyhash', 'Administrador', 'admin', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 2. Categorías de menú
INSERT INTO menu_categories (name, description, sort_order, is_active, created_at, updated_at) VALUES
('Ceviches', 'Ceviches frescos del día', 1, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Chicharrones', 'Chicharrones y frituras', 2, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Bebidas', 'Bebidas frías y calientes', 3, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Entradas', 'Piqueos y entradas', 4, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 3. Items del menú
INSERT INTO menu_items (name, category_id, price, cost, is_available, created_at, updated_at) VALUES
('Ceviche Clásico', 1, 25.00, 12.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ceviche Mixto', 1, 35.00, 18.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Chicharrón de Pescado', 2, 28.00, 14.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Leche de Tigre', 4, 15.00, 7.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Inca Kola 1.5L', 3, 8.00, 4.50, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 4. Cliente genérico
INSERT INTO clients (name, created_at, updated_at) VALUES
('Cliente General', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 5. Proveedor genérico
INSERT INTO suppliers (name, is_active, created_at, updated_at) VALUES
('Proveedor Varios', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 6. Órdenes de venta (status, subtotal, tax, discount, total son obligatorios)
INSERT INTO orders (order_number, status, subtotal, tax, discount, total, order_date, created_by, created_at, updated_at) VALUES
('ORD-2024-001', 'completed', 100.00, 18.00, 0.00, 118.00, '2024-01-15 12:30:00', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('ORD-2024-002', 'completed', 75.00, 13.50, 0.00, 88.50, '2024-01-16 14:00:00', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('ORD-2024-003', 'completed', 150.00, 27.00, 0.00, 177.00, '2024-01-17 19:00:00', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 7. Líneas de orden (discount es obligatorio)
INSERT INTO order_lines (order_id, menu_item_id, quantity, price_at_sale, discount, line_total, created_at) VALUES
(1, 1, 2, 25.00, 0.00, 50.00, CURRENT_TIMESTAMP),
(1, 5, 2, 8.00, 0.00, 16.00, CURRENT_TIMESTAMP),
(2, 2, 1, 35.00, 0.00, 35.00, CURRENT_TIMESTAMP),
(2, 4, 1, 15.00, 0.00, 15.00, CURRENT_TIMESTAMP),
(3, 3, 3, 28.00, 0.00, 84.00, CURRENT_TIMESTAMP),
(3, 1, 1, 25.00, 0.00, 25.00, CURRENT_TIMESTAMP);

-- 8. Gastos operativos (tax, total, is_paid son obligatorios)
INSERT INTO expenses (category, amount, tax, total, description, is_paid, expense_date, created_by, created_at, updated_at) VALUES
('supplies', 450.00, 81.00, 531.00, 'Compra de pescado fresco', true, '2024-01-15 08:00:00', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('staff', 1200.00, 0.00, 1200.00, 'Pago quincenal personal', true, '2024-01-15 18:00:00', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('services', 180.00, 32.40, 212.40, 'Pago luz y agua', true, '2024-01-16 10:00:00', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('supplies', 320.00, 57.60, 377.60, 'Compra de limones y cebollas', true, '2024-01-17 09:00:00', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('transport', 50.00, 9.00, 59.00, 'Delivery varios', false, '2024-01-17 20:00:00', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 9. Pagos de ventas (method, amount, payment_date, created_by obligatorios)
INSERT INTO payments (order_id, method, amount, payment_date, created_by, created_at) VALUES
(1, 'cash', 118.00, '2024-01-15 12:35:00', 1, CURRENT_TIMESTAMP),
(2, 'yape', 88.50, '2024-01-16 14:05:00', 1, CURRENT_TIMESTAMP),
(3, 'card', 177.00, '2024-01-17 19:10:00', 1, CURRENT_TIMESTAMP);

-- 10. Pagos de gastos
INSERT INTO payments (expense_id, method, amount, payment_date, created_by, created_at) VALUES
(1, 'cash', 531.00, '2024-01-15 08:05:00', 1, CURRENT_TIMESTAMP),
(2, 'transfer', 1200.00, '2024-01-15 18:05:00', 1, CURRENT_TIMESTAMP),
(3, 'transfer', 212.40, '2024-01-16 10:05:00', 1, CURRENT_TIMESTAMP),
(4, 'cash', 377.60, '2024-01-17 09:05:00', 1, CURRENT_TIMESTAMP);

-- faltan las recetas pero ya lo perdiiiiii
