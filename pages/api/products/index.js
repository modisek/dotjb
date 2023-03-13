import prisma from "../../../lib/prisma";
export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await postProduct(req, res);
    case "GET":
      return await getProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}
const postProduct = async (req, res) => {
  const { name, description, quantity, price } = req.body;
  const result = await prisma.item.create({
    data: {
      name: name,
      description: description,
      quantity: Number(quantity),
      price: Number(price),
    },
  });
  res.json(result);
};

const getProduct = async (req, res) => {
  const result = await prisma.item.findMany();
  res.json(result);
};
