import { Request, Response } from 'express'

export class MainController {
    public static async index(req: Request, res: Response): Promise<void> {
        const result = {
            'status': true,
        }
        res.json(result)
    }
}