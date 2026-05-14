/*
  Warnings:

  - Added the required column `updatedAt` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "currElectricity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "isPaid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "occupants" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "prevElectricity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "serviceFee" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "tenantName" TEXT DEFAULT 'Chưa có khách',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Trống';
