import { Router } from "express";
import { getLogin, getRegister, Login, logout, Register } from "../controllers/authController";
import { checkToken } from "../helpers/middleware/authMiddleware";

const authRoutes = Router();

authRoutes.get('/login', getLogin);
authRoutes.get('/register', getRegister);
authRoutes.post('/login', Login);
authRoutes.post('/register', Register);
authRoutes.get('/logout', logout);

export default authRoutes;