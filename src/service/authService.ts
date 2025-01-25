import prisma from "../prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const findUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({ where: { email } })
}

export const createToken = async (email: string, password: string) => {
    const user = await findUserByEmail(email);
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET || 'your_secret', { expiresIn: '1h' });
    
    return token; 
};

export const createUser = async (data: {
    username: string,
    email: string,
    password: string
}) => {
    return await prisma.user.create({ data })
}
