"use server";

import Image from "next/image";

import { getAllProducts } from "@/services/products";
import { Product } from "@prisma/client";

const HomePage: React.FC = async () => {
  const products = await getAllProducts();

  return (
    <div className="flex min-h-screen w-screen items-center justify-center p-12">
      <div className="space-y-2 border p-2">
        <h1>List of all products</h1>
        <div className="flex flex-col gap-2">
          {products.map((product: Product) => (
            <div key={product.id} className="border p-2">
              <h2>{product.name}</h2>
              <div className="relative h-[250px] w-[250px]">
                <Image src={product.imgPath} alt="product picture" fill={true} />
              </div>
              <p>{product.description}</p>
              <div className="flex items-center justify-between p-2">
                <span>${product.price}</span>
                <button className="border p-2">Buy now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
