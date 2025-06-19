-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('TABLET', 'LAPTOP', 'SMARTPHONE', 'SMARTWATCH');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgPath" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
