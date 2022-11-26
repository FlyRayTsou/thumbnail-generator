import * as express from 'express'
import { MainController } from './controller/MainController'

console.log('Connection was created.')
const app = express.default()
app.use(express.json({limit: '25mb'}));
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
app.get('/healthCheck', MainController.index)
app.post('/createThumbnail', MainController.createThumbnail)
app.listen(3456)