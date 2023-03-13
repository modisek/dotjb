import prisma from "../../../lib/prisma";
export default async function handler(req, res) {
    if (req.method == "GET") {
        const { id } = req.query;
        const item = await prisma.item.findUnique({
            where: {
                id: Number(id),
            },
        });
        return res.json(item);
    }

    if (req.method == "PUT") {
        const { id } = req.query;
        const { name, description, quantity, price } = req.body;
        const item = await prisma.item.update({
            where: { id: Number(id) },
            data: {
                name: name,
                description: description,
                quantity: Number(quantity),
                price: Number(price),
            },
        });
        return res.json(item);
    } else if (req.method == "DELETE") {
        const { id } = req.query;
        const item = await prisma.item.delete({
            where: {
                id: Number(id),
            },
        });
        return res.json(item);
    }
}
