import prisma from "../prisma";


export const getAllExample = async () => {
    return await prisma.example.findMany();
}

export const createExample = async (data: {
    title: string;
}) => {
    return await prisma.example.create({ data })
}
