import prisma from "../../../lib/prisma";
export default async function handler(req, res) {
    const { term } = req.query;
    const item = await prisma.item.findMany({
        where: {
            name: {
                startsWith: term,
            },
        },
    });
    return res.json(item);
}
