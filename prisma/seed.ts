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
                name: "Monas (Monumen Nasional)",
                latitude: -6.175392,
                longitude: 106.827153,
                address: "Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
                description: "Ikon terkenal Indonesia yang terletak di Jakarta, simbol perjuangan bangsa."
            },
            {
                name: "Candi Borobudur",
                latitude: -7.607874,
                longitude: 110.203751,
                address: "Magelang, Jawa Tengah",
                description: "Candi Buddha terbesar di dunia dan salah satu warisan budaya dunia UNESCO."
            },
            {
                name: "Pantai Kuta",
                latitude: -8.717719,
                longitude: 115.168232,
                address: "Kuta, Kabupaten Badung, Bali",
                description: "Pantai populer dengan pasir putih yang menjadi daya tarik utama wisatawan di Bali."
            },
            {
                name: "Gunung Bromo",
                latitude: -7.942493,
                longitude: 112.953013,
                address: "Probolinggo, Jawa Timur",
                description: "Gunung berapi aktif yang menawarkan pemandangan matahari terbit yang menakjubkan."
            },
            {
                name: "Danau Toba",
                latitude: 2.693736,
                longitude: 98.940389,
                address: "Sumatera Utara",
                description: "Danau vulkanik terbesar di Asia Tenggara dengan Pulau Samosir di tengahnya."
            }
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