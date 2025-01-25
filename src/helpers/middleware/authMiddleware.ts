// import { NextFunction, Request, Response } from "express";
// import { verifyToken } from "../token";
// import jwt from 'jsonwebtoken'
// const JWT_SECRET = process.env.JWT_SECRET || "******";

// export const checkToken = (req: Request, res: Response, next: NextFunction): void => {
//     const bearer = req.header("Authorization");
  
//     if (!bearer) {
//       res.status(401).json({ message: "Unauthorized: No token provided" });
//       return;
//     }
  
//     const token = bearer.split(" ")[1];
  
//     try {
//       const decodedToken = verifyToken(token);
//       req.token = { guid: decodedToken.id, email: decodedToken.email };
//       next();
//     } catch (error) {
//       res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
//     }
//   };

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
   const token = req.cookies.token;

   if (!token) {
       return res.status(401).json({ message: "Unauthorized" });
   }

   jwt.verify(token, process.env.JWT_SECRET || 'your_secret', (err: any, decoded: any) => {
       if (err) {
           return res.status(401).json({ message: "Invalid or expired token" });
       }
       req.token = decoded;
       next();
   });
}