import { Request, Response } from "express";
import { createExample, getAllExample } from "../service/exampleService";

export const getExample = async (req: Request, res: Response) => {
    try {
        const data = await getAllExample();
        //   res.render('home', { data });
        res.send({
            msg: "get data success",
            status: 200,
            data: data
        })
    } catch (error) {
        res.send({
            msg: "get data failed",
            status: 500,
            error: error
        })
    }
};

export const createData = async (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        const newData = await createExample({
            title
        })
        return ({
            msg: 'create data success',
            status: 200,
            data: newData
        })
    } catch (error) {
        return ({
            msg: 'create data failed',
            status: 500,
            error: error
        })
    }
}