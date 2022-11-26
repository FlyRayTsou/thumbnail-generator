import { Request, Response } from 'express'
import fs from 'fs'


export class MainController {
    public static async index(req: Request, res: Response): Promise<void> {
        const result = {
            'status': true,
        }
        res.json(result)
    }

    public static async convertImage(req: Request, res: Response): Promise<void> {
        res.json(req.files);
    }
}