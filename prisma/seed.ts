import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash("123", 10)
    await prisma.user.create({
        data: {
            id: '123',
            username: 'UserTest',
            password: hashedPassword,
            email: 'User@test.com',
        }
    })
    await prisma.location.createMany({
        data: [
            {
                name: "Central Park",
                latitude: 40.785091,
                longitude: -73.968285,
                address: "New York, NY, USA",
                description: "A famous park in New York City.",
            },
            {
                name: "Location 2",
                latitude: -6.917464,
                longitude: 107.619125,
                address: "lontrong 12",
                description: "My Home",
            },
            {
                name: "Location 3",
                latitude: -7.250445,
                longitude: 112.768845,
                address: "Jl. in aja dulu",
                description: "My Office",
            },
        ],
    });

    console.log("Dummy data added!");
}

main()
    .then(() => prisma.$disconnect())
    .catch((err) => {
        console.error(err);
        prisma.$disconnect();
    });