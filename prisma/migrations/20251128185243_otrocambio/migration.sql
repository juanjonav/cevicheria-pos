/*
  Warnings:

  - Made the column `sort_order` on table `menu_categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cost` on table `menu_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `min_alert_level` on table `stock_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `unit_cost` on table `stock_items` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "expenses" ADD COLUMN     "is_fixed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "menu_categories" ALTER COLUMN "sort_order" SET NOT NULL;

-- AlterTable
ALTER TABLE "menu_items" ALTER COLUMN "cost" SET NOT NULL,
ALTER COLUMN "cost" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "stock_items" ALTER COLUMN "min_alert_level" SET NOT NULL,
ALTER COLUMN "min_alert_level" SET DEFAULT 0,
ALTER COLUMN "unit_cost" SET NOT NULL,
ALTER COLUMN "unit_cost" SET DEFAULT 0;

-- CreateIndex
CREATE INDEX "expenses_is_fixed_idx" ON "expenses"("is_fixed");
