/*
  Warnings:

  - You are about to drop the column `incurred_at` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `paid_at` on the `payments` table. All the data in the column will be lost.
  - You are about to alter the column `quantity` on the `recipe_items` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,3)`.
  - You are about to alter the column `quantity` on the `stock_items` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,3)`.
  - You are about to alter the column `min_alert_level` on the `stock_items` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,3)`.
  - You are about to alter the column `quantity` on the `stock_movements` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,3)`.
  - A unique constraint covering the columns `[document_number]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order_number]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Made the column `created_at` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `total` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `expenses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `created_by` on table `expenses` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `menu_categories` table without a default value. This is not possible if the table is not empty.
  - Made the column `created_at` on table `menu_categories` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `menu_items` table without a default value. This is not possible if the table is not empty.
  - Made the column `category_id` on table `menu_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_available` on table `menu_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `menu_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `order_lines` required. This step will fail if there are existing NULL values in that column.
  - The required column `order_number` was added to the `orders` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updated_at` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Made the column `order_type` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_by` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_by` on table `payments` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `recipe_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `stock_items` table without a default value. This is not possible if the table is not empty.
  - Made the column `quantity` on table `stock_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `stock_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `stock_movements` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_by` on table `stock_movements` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `is_active` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "expense_category" AS ENUM ('supplies', 'staff', 'services', 'maintenance', 'transport', 'marketing', 'taxes', 'other');

-- CreateEnum
CREATE TYPE "voucher_type" AS ENUM ('ticket', 'invoice', 'note');

-- CreateEnum
CREATE TYPE "cash_register_status" AS ENUM ('open', 'closed');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "order_status" ADD VALUE 'in_progress';
ALTER TYPE "order_status" ADD VALUE 'ready';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "payment_method" ADD VALUE 'yape';
ALTER TYPE "payment_method" ADD VALUE 'plin';
ALTER TYPE "payment_method" ADD VALUE 'multiple';

-- AlterEnum
ALTER TYPE "stock_movement_type" ADD VALUE 'waste';

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_created_by_fkey";

-- DropForeignKey
ALTER TABLE "menu_items" DROP CONSTRAINT "menu_items_category_id_fkey";

-- DropForeignKey
ALTER TABLE "order_lines" DROP CONSTRAINT "order_lines_menu_item_id_fkey";

-- DropForeignKey
ALTER TABLE "order_lines" DROP CONSTRAINT "order_lines_order_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_client_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_created_by_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_created_by_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_order_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_items" DROP CONSTRAINT "recipe_items_menu_item_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_items" DROP CONSTRAINT "recipe_items_stock_item_id_fkey";

-- DropForeignKey
ALTER TABLE "stock_movements" DROP CONSTRAINT "stock_movements_created_by_fkey";

-- DropForeignKey
ALTER TABLE "stock_movements" DROP CONSTRAINT "stock_movements_related_order_id_fkey";

-- DropForeignKey
ALTER TABLE "stock_movements" DROP CONSTRAINT "stock_movements_stock_item_id_fkey";

-- DropIndex
DROP INDEX "idx_expenses_date";

-- DropIndex
DROP INDEX "idx_orders_date";

-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "address" TEXT,
ADD COLUMN     "document_number" TEXT,
ADD COLUMN     "document_type" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "incurred_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expense_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_paid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "supplier_id" INTEGER,
ADD COLUMN     "tax" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "total" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" "expense_category" NOT NULL,
ALTER COLUMN "created_by" SET NOT NULL;

-- AlterTable
ALTER TABLE "menu_categories" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "sort_order" INTEGER DEFAULT 0,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "menu_items" ADD COLUMN     "cost" DECIMAL(10,2),
ADD COLUMN     "preparation_time" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "category_id" SET NOT NULL,
ALTER COLUMN "is_available" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "order_lines" ADD COLUMN     "discount" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "notes" TEXT,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "discount" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "order_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "order_number" TEXT NOT NULL,
ADD COLUMN     "subtotal" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "tax" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "voucher_number" TEXT,
ADD COLUMN     "voucher_type" "voucher_type",
ALTER COLUMN "order_type" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "total" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "created_by" SET NOT NULL;

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "paid_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expense_id" INTEGER,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "payment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "order_id" DROP NOT NULL,
ALTER COLUMN "created_by" SET NOT NULL;

-- AlterTable
ALTER TABLE "recipe_items" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "quantity" SET DATA TYPE DECIMAL(10,3);

-- AlterTable
ALTER TABLE "stock_items" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "unit_cost" DECIMAL(10,2),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL,
ALTER COLUMN "quantity" SET DATA TYPE DECIMAL(10,3),
ALTER COLUMN "min_alert_level" SET DATA TYPE DECIMAL(10,3),
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "stock_movements" ADD COLUMN     "movement_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "related_expense_id" INTEGER,
ADD COLUMN     "supplier_id" INTEGER,
ADD COLUMN     "total_cost" DECIMAL(10,2),
ADD COLUMN     "unit_cost" DECIMAL(10,2),
ALTER COLUMN "quantity" SET DATA TYPE DECIMAL(10,3),
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "created_by" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "is_active" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact_name" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "ruc" TEXT,
    "address" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cash_registers" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "status" "cash_register_status" NOT NULL,
    "opening_amount" DECIMAL(10,2) NOT NULL,
    "closing_amount" DECIMAL(10,2),
    "expected_amount" DECIMAL(10,2),
    "difference" DECIMAL(10,2),
    "notes" TEXT,
    "opened_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cash_registers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_ruc_key" ON "suppliers"("ruc");

-- CreateIndex
CREATE INDEX "suppliers_ruc_idx" ON "suppliers"("ruc");

-- CreateIndex
CREATE INDEX "cash_registers_user_id_idx" ON "cash_registers"("user_id");

-- CreateIndex
CREATE INDEX "cash_registers_opened_at_idx" ON "cash_registers"("opened_at");

-- CreateIndex
CREATE INDEX "cash_registers_status_idx" ON "cash_registers"("status");

-- CreateIndex
CREATE UNIQUE INDEX "clients_document_number_key" ON "clients"("document_number");

-- CreateIndex
CREATE INDEX "clients_document_number_idx" ON "clients"("document_number");

-- CreateIndex
CREATE INDEX "clients_phone_idx" ON "clients"("phone");

-- CreateIndex
CREATE INDEX "expenses_expense_date_idx" ON "expenses"("expense_date");

-- CreateIndex
CREATE INDEX "expenses_category_idx" ON "expenses"("category");

-- CreateIndex
CREATE INDEX "expenses_is_paid_idx" ON "expenses"("is_paid");

-- CreateIndex
CREATE INDEX "menu_items_category_id_idx" ON "menu_items"("category_id");

-- CreateIndex
CREATE INDEX "menu_items_is_available_idx" ON "menu_items"("is_available");

-- CreateIndex
CREATE INDEX "order_lines_menu_item_id_idx" ON "order_lines"("menu_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "orders_order_number_key" ON "orders"("order_number");

-- CreateIndex
CREATE INDEX "orders_order_date_idx" ON "orders"("order_date");

-- CreateIndex
CREATE INDEX "orders_order_number_idx" ON "orders"("order_number");

-- CreateIndex
CREATE INDEX "payments_payment_date_idx" ON "payments"("payment_date");

-- CreateIndex
CREATE INDEX "payments_method_idx" ON "payments"("method");

-- CreateIndex
CREATE INDEX "recipe_items_menu_item_id_idx" ON "recipe_items"("menu_item_id");

-- CreateIndex
CREATE INDEX "recipe_items_stock_item_id_idx" ON "recipe_items"("stock_item_id");

-- CreateIndex
CREATE INDEX "stock_items_quantity_idx" ON "stock_items"("quantity");

-- CreateIndex
CREATE INDEX "stock_movements_stock_item_id_idx" ON "stock_movements"("stock_item_id");

-- CreateIndex
CREATE INDEX "stock_movements_movement_date_idx" ON "stock_movements"("movement_date");

-- CreateIndex
CREATE INDEX "stock_movements_movement_type_idx" ON "stock_movements"("movement_type");

-- CreateIndex
CREATE INDEX "users_username_idx" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "users"("role");

-- AddForeignKey
ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "menu_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_items" ADD CONSTRAINT "recipe_items_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_items" ADD CONSTRAINT "recipe_items_stock_item_id_fkey" FOREIGN KEY ("stock_item_id") REFERENCES "stock_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_movements" ADD CONSTRAINT "stock_movements_stock_item_id_fkey" FOREIGN KEY ("stock_item_id") REFERENCES "stock_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_movements" ADD CONSTRAINT "stock_movements_related_order_id_fkey" FOREIGN KEY ("related_order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_movements" ADD CONSTRAINT "stock_movements_related_expense_id_fkey" FOREIGN KEY ("related_expense_id") REFERENCES "expenses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_movements" ADD CONSTRAINT "stock_movements_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_movements" ADD CONSTRAINT "stock_movements_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lines" ADD CONSTRAINT "order_lines_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lines" ADD CONSTRAINT "order_lines_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "menu_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cash_registers" ADD CONSTRAINT "cash_registers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "idx_order_lines_order" RENAME TO "order_lines_order_id_idx";

-- RenameIndex
ALTER INDEX "idx_orders_status" RENAME TO "orders_status_idx";
