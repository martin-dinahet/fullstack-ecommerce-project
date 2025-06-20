import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const productsData: Array<Prisma.ProductCreateInput> = [
  {
    name: "iPad Pro",
    type: "TABLET",
    description: "",
    imgPath: "/products/apple/ipad/ipad-air.png",
    price: "1299",
  },
  {
    name: "iPad Air",
    type: "TABLET",
    description: "",
    imgPath: "/products/apple/ipad/ipad-air.png",
    price: "749",
  },
  {
    name: "iPhone 15 Plus",
    type: "SMARTPHONE",
    description: "",
    imgPath: "/products/apple/iphone/iphone-15-plus.png",
    price: "799",
  },
  {
    name: "iPhone 15",
    type: "SMARTPHONE",
    description: "",
    imgPath: "/products/apple/iphone/iphone-15.png",
    price: "699",
  },
  {
    name: "Macbook Air",
    type: "LAPTOP",
    description: "",
    imgPath: "/products/apple/macbook/macbook-air.png",
    price: "1199",
  },
  {
    name: "Macbook Pro",
    type: "LAPTOP",
    description: "",
    imgPath: "/products/apple/macbook/macbook-pro.png",
    price: "1899",
  },
];

const usersData: Array<Prisma.UserCreateInput> = [
  {
    username: "john23",
    email: "john@mail.com",
    password: "password123",
    type: "ADMINISTRATOR",
  },
];

export const main = async () => {
  for (const p of productsData) {
    await prisma.product.create({ data: p });
  }
  for (const u of usersData) {
    await prisma.user.create({ data: u });
  }
};

main();
