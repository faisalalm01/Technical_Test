import { Request, Response, Router } from "express";
import mapRoutes from "./mapRoutes";
import exampleRoutes from "./exampleRoutes";
import authRoutes from "./authRoutes";

const router = Router();

router.get('/app', async (req: Request, res: Response) => {[
    res.send({
        msg: "Server Running !"
    })
]})

router.use('/', mapRoutes);

export default router