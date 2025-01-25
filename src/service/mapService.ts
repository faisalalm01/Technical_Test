import prisma from '../prisma';

export const getAllLocationsService = async () => {
    return await prisma.location.findMany();
};

export const createLocationService = async (data: {
    name: string;
    latitude: number;
    longitude: number;
    address: string;
    description: string;
}) => {
    return await prisma.location.create({ data });
};

export const getLocationById = async (id: string) => {
    return await prisma.location.findUnique({ where: { id } });
};

export const updateLocationService = async (id: string, data: {
    name: string;
    latitude: number;
    longitude: number;
    address: string;
    description: string;
}) => {
    return await prisma.location.update({ where: { id }, data });
};

export const deleteLocationService = async (id: string) => {
    return await prisma.location.delete({ where: { id } })
}