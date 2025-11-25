# 🍽️ POS Store · Cevichería

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/juanjonavs-projects/cevicheria-pos.vercel.app)

Sistema POS minimalista para una **cevichería**, diseñado para demostrar procesos de ventas, gasto operativo, inventario básico y flujo de caja.  
Es un proyecto académico orientado al análisis contable, costos y administración financiera.

---

## 📌 Overview

Este proyecto implementa un **Point of Sale (POS)** y sistema de control para un pequeño restaurante.  
Incluye las funciones esenciales para administrar:

- Menús y categorías  
- Órdenes y pagos  
- Gastos operativos  
- Movimientos de stock  
- Historial de ventas  
- Reportes económicos simples  

El objetivo principal es mostrar cómo un negocio pequeño puede obtener:

- **Ingresos diarios y semanales**  
- **Gastos operativos clasificados**  
- **Consumo automático de inventario**  
- **Flujo de caja (Ingresos – Gastos)**  
- **Indicadores básicos para toma de decisiones**

---

## ⭐ Main Features

- Gestión de categorías y menú  
- Creación de órdenes y proceso de pago  
- Métodos de pago: efectivo, tarjeta, transferencia  
- Registro de gastos operativos  
- Movimientos automáticos de inventario  
- Panel de análisis financiero con totales  
- UI simple, intuitiva y orientada a uso académico  

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16**
- **TypeScript**
- **TailwindCSS**
- **Shadcn/UI**

### Backend / DB
- **Prisma ORM**
- **PostgreSQL**
- **API fetch desde App Router**

---

## 🚀 Deployment

El proyecto está desplegado en:

🔗 **https://vercel.com/juanjonavs-projects/cevicheria-pos.vercel.app**

---

## 🗄️ Base de datos

El archivo con los datos iniciales para poblar la base de datos se encuentra en:

poner en .env: DATABASE_URL=""


estructura
/app                → Rutas Next.js (dashboard, POS, gastos, ventas)
/components         → UI y componentes reutilizables
/lib                → Prisma + consultas + SQL inicial
/prisma             → Schema de base de datos
/docs (opcional)    → Documentación técnica
