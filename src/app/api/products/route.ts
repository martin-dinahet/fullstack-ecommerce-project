import { prisma } from "@/lib/prisma";
import { Product } from "@prisma/client";
import { NextResponse } from "next/server";

type APIResponse<T> = Promise<NextResponse<T>>;

// GET /api/products
export const GET = async (): APIResponse<{ products: Product[] }> => {
  const products = await prisma.product.findMany();
  return NextResponse.json({ products });
};
