import { Request, Response } from 'express'
import jimp from 'jimp';

export class MainController {
    public static async index(req: Request, res: Response): Promise<void> {
        const result = {
            'status': true,
        }
        res.json(result)
    }

    public static async createThumbnail(req: Request, res: Response): Promise<void> {
        const base64Image = req.body.image;
        const parts = base64Image.split(';');
        const imageData = parts[1].split(',')[1];
    
        const buf = Buffer.from(imageData, 'base64');

        jimp.read(buf, (err, image) => {
            if (err) throw err;
            else {
                image.resize(100, 100).getBase64(jimp.MIME_JPEG, function (err, src) {
                    res.json(src);
                })
            }
        })
    }

}