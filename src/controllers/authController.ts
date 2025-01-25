import { Request, Response } from "express"
import { createToken, createUser, findUserByEmail } from "../service/authService"
import bcrypt from 'bcrypt';

export const getLogin = (req: Request, res: Response) => {
    res.render('Login', { title: 'Login' });
};

export const getRegister = (req: Request, res: Response) => {
    res.render('Register', { title: 'Register' });
};

export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const token = await createToken(email, password);

        res.cookie('token', token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {
        res.status(500).send('Failed to Login');
    }
}

export const Register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await createUser({
            username,
            email,
            password: hashedPassword
        })
        // res.redirect('/login');
        res.send('success register')
    } catch (error) {
        res.status(500).send('Failed to Register');
    }
}

export const logout = (req: Request, res: Response) => {
    res.clearCookie('token');
    res.redirect('/login');
};