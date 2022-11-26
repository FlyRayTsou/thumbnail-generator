import * as express from 'express'
import multer from 'multer'
import { MainController } from './controller/MainController'

console.log('Connection was created.')
const app = express.default()
const upload = multer({ dest: 'uploads/' });
app.use(express.json())
app.use(
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Credentials', 'true')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Authorization,Content-Type'
        )
        next()
    }
)
app.use("/uploads", express.static('uploads'))
app.get('/test', MainController.index)
app.post('/convertImage', upload.array('photos', 12), MainController.convertImage)
app.listen(3456)