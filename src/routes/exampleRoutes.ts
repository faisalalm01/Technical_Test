import { Router } from "express";
import { getExample } from "../controllers/exampleController";

const exampleRoutes = Router();

exampleRoutes.get('/', getExample);

export default exampleRoutes;