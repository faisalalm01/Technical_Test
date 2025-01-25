import { JwtPayload } from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            token?: {
                id: string;
                email: string;
            } | any
        }
    }
}