import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (
  image: string | null,
  title: string | null,
  price: number,
  category: string
) => {
  const products = await prisma.product.create({
    data: {
      image,
      title,
      price,
      category,
    },
  });

  return products;
};

export const getAllProducts = async () => {
  const products = await prisma.product.findMany();

  return products;
};

export const deleteProduct = async (id: string) => {
  await prisma.product.delete({
    where: {
      id: id,
    },
  });
};
